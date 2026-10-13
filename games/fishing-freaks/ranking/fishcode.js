// Fishing Freaks: Bass Rise for WonderSwan: fish code decoder for a website ranking.
// Format spec: SPEC.md (same folder). No dependencies; works in browsers and Node (ES module).
//
//   import { decodeFishCode } from './fishcode.js';
//   const r = decodeFishCode('2MCM 0480 01Z0 7GW1', { name: 'ABLLLLLLLL' });
//   // r.ok, r.format, r.fish {...}, r.problems [...]
//
// Two formats are accepted:
//   - the ranking code of the English patch 1.1+ (16 characters, Crockford base32): full catch data, a
//     hash of the angler's name and a keyed check;
//   - the original password (20 hex digits from the English patch, or the 10 symbols a Japanese cartridge
//     shows): species, size, weight (low byte), place, season, time, part of the name, a plain checksum.
// Neither can prove a catch is real: the formats are public and the check key is in the ROM. Use them for
// an honour-system ranking with the plausibility checks below.

const B32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const KEY = 'BassRise';
const SYMBOLS = "豆１２３４５６７８９ＡＢＣＤＥＦＧＨｅＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらｄるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼアイウエオカキクケコサシスセソタチツテトナニヌネａノハヒフヘホマミムメモヤユヨラｆルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボ壱弐＋－＝ｈ＃＄％＆ｒ＊参四／→←ｍｎ父母兄宇会伍六七九日年月白目半反必匹分平㊤㊥㊦㊧㊨☆？￥＠上下右左亜安位円王川山池沼石岩糸魚水火色巨空海花天雨角木絵区元大馬鳥猫国土田中";
export const SPECIES = { 1: 'Smallmouth Bass', 2: 'Smallmouth Bass', 3: 'Smallmouth Bass', 4: 'Largemouth Bass',
  5: 'Largemouth Bass', 6: 'Largemouth Bass', 7: 'Bluegill', 8: 'Rainbow Trout', 9: 'Char', 10: 'Masu Trout',
  11: 'Snakehead', 12: 'Catfish' };
export const PLACES = ['Farm Pond', 'Kasumigaura', 'Lake Biwa', 'Lake Ikehara', 'Lake Hibara'];
export const SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'];
export const TIMES = ['Morning', 'Midday', 'Evening'];
export const WEATHER = ['Sunny', 'Cloudy', 'Rain'];
export const LURES = ['Popper', 'Swisher', 'Pencil Bait', 'Suspend Minnow', 'Floating Minnow', 'Deep Crank',
  'Shallow Crank', 'Vibration S', 'Vibration L', 'Spinnerbait', 'Buzzbait', 'Paddle Tail', 'Craw', 'Grub',
  'Straight Worm', 'Stick Bait'];
export const COLOURS = ['Black Gold', 'Hot Tiger', 'Ayu', 'Oikawa', 'Watermelon', 'Smoke', 'Chartreuse', 'Motor Oil'];

// CRC-16/CCITT-FALSE (poly 0x1021, MSB first), continuing from `crc`
export function crc16(bytes, crc = 0xFFFF) {
  for (const b of bytes) {
    crc ^= b << 8;
    for (let i = 0; i < 8; i++) crc = (crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1) & 0xFFFF;
  }
  return crc;
}

function ascii(s) {
  const out = [];
  for (const ch of s) out.push(ch.charCodeAt(0) & 0xFF);
  return out;
}

export function nameHash(name) {
  return crc16(ascii(name).slice(0, 10));
}

function decodeRanking(c, name) {
  let bits = 0n;
  for (const ch of c) bits = (bits << 5n) | BigInt(B32.indexOf(ch));
  const b = [];
  for (let i = 9; i >= 0; i--) b.push(Number((bits >> BigInt(8 * i)) & 0xFFn));
  const species = b[0] & 15, size = (b[1] << 4) | (b[2] >> 4), weight = ((b[2] & 15) << 8) | b[3];
  const place = ((b[4] & 1) << 2) | (b[5] >> 6), time = (b[5] >> 2) & 3, weather = b[5] & 3;
  const fish = {
    species: SPECIES[species] || null, speciesId: species, sizeCm: size / 10, weightKg: weight / 10,
    lure: LURES[b[4] >> 4], colour: COLOURS[(b[4] >> 1) & 7], place: PLACES[place] || null,
    season: SEASONS[(b[5] >> 4) & 3], time: TIMES[time] || null, weather: WEATHER[weather] || null,
  };
  const problems = [];
  if (b[0] >> 4 !== 1) problems.push('unknown version ' + (b[0] >> 4));
  if (crc16(b.slice(0, 8), crc16(ascii(KEY))) !== ((b[8] << 8) | b[9])) problems.push('check failed (typo or edited code)');
  let nameOk = null;
  if (name !== undefined && name !== null) {
    nameOk = nameHash(name) === ((b[6] << 8) | b[7]);
    if (!nameOk) problems.push('the name does not match the code (names are case-sensitive)');
  }
  return { format: 'ranking', version: b[0] >> 4, fish, nameOk, problems };
}

function decodeLegacy(b) {
  const w = b[0] | (b[1] << 8), species = w >> 12, size = w & 0xFFF, lst = b[3];
  const fish = {
    species: SPECIES[species] || null, speciesId: species, sizeCm: size / 10,
    weightKgLowByte: b[2] / 10,   // only the low byte of the weight in tenths: real weight = this + n * 25.6 kg
    place: PLACES[lst >> 4] || null, season: SEASONS[(lst >> 2) & 3], time: TIMES[lst & 3] || null,
  };
  const problems = [];
  if ((b.slice(0, 9).reduce((a, x) => a + x, 0) & 255) !== b[9]) problems.push('checksum failed (typo or edited code)');
  return { format: 'original', fish, nameBytes: b.slice(4, 9), nameOk: null, problems };
}

// Plausibility checks for a ranking: values the game cannot produce, and the original password's limits.
function plausibility(r) {
  const f = r.fish, p = [];
  if (!f.species) p.push('unknown species');
  if (!f.place) p.push('unknown place');
  if (!f.time) p.push('unknown time of day');
  if (r.format === 'ranking' && !f.weather) p.push('unknown weather');
  if (f.sizeCm <= 0) p.push('size is zero');
  if (r.format === 'ranking' && f.weightKg <= 0) p.push('weight is zero');
  return p;
}

export function decodeFishCode(input, opts = {}) {
  const raw = String(input).trim();
  const compact = raw.replace(/[\s\-\/]/g, '');
  let r;
  if (/^[0-9a-fA-F]{20}$/.test(compact)) {
    const b = [];
    for (let i = 0; i < 20; i += 2) b.push(parseInt(compact.slice(i, i + 2), 16));
    r = decodeLegacy(b);
  } else if ([...compact].length === 10 && [...compact].every((ch) => SYMBOLS.includes(ch))) {
    r = decodeLegacy([...compact].map((ch) => SYMBOLS.indexOf(ch)));
  } else {
    const c = compact.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1');
    if (c.length !== 16 || [...c].some((ch) => !B32.includes(ch))) {
      return { ok: false, format: null, fish: null, problems: ['not a Fishing Freaks fish code'] };
    }
    r = decodeRanking(c, opts.name);
  }
  r.problems = r.problems.concat(plausibility(r));
  r.ok = r.problems.length === 0;
  return r;
}
