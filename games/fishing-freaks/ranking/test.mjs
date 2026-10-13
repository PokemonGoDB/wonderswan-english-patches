// node games/fishing-freaks/ranking/test.mjs : the decoder against codes the game itself produced
// (test-vectors.json: random catch records and names written into a save state, codes read from the
// game's screen buffer; tools/ff_rank.py made the expected values).
import { readFileSync } from 'node:fs';
import { decodeFishCode } from './fishcode.js';

const vectors = JSON.parse(readFileSync(new URL('./test-vectors.json', import.meta.url)));
let fail = 0;
for (const v of vectors) {
  const r = decodeFishCode(v.ranking, { name: v.name });
  const e = v.decoded;
  const same = r.fish.speciesId === e.species_id && r.fish.sizeCm === e.size_cm && r.fish.weightKg === e.weight_kg
    && r.fish.lure === e.lure && r.fish.colour === e.colour && (r.fish.place ?? '?') === e.place
    && r.fish.season === e.season && (r.fish.time ?? '?') === e.time && (r.fish.weather ?? '?') === e.weather
    && r.nameOk === true && !r.problems.some((p) => p.startsWith('check'));
  const other = v.name.slice(0, -1) + (v.name.endsWith('Q') ? 'R' : 'Q');
  const wrongName = decodeFishCode(v.ranking, { name: other }).nameOk === false;
  const pw = decodeFishCode(v.password);
  const pwOk = pw.format === 'original' && !pw.problems.some((p) => p.startsWith('checksum'));
  // one changed character must fail the check
  const c = v.ranking.replace(/\s/g, ''); const t = c.slice(0, 5) + (c[5] === '0' ? '1' : '0') + c.slice(6);
  const typo = decodeFishCode(t, { name: v.name }).problems.some((p) => p.startsWith('check') || p.startsWith('the name'));
  if (!(same && wrongName && pwOk && typo)) { fail++; console.log('FAIL', v, r, { same, wrongName, pwOk, typo }); }
}
console.log(`${vectors.length} vectors, ${fail} failed`);
process.exit(fail ? 1 : 0);
