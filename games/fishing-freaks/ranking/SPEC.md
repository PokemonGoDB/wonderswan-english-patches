# Fishing Freaks: Bass Rise: fish codes for a ranking website

Two codes identify a catch. Both appear when a player presses START on a catch (the screen after landing a
fish, or a fish in Catch Data). Decoder: `fishcode.js` (this folder, no dependencies); the test vectors
were made with the translation project's reference implementation; tests: `node test.mjs`.

**Neither code proves a catch is real.** The formats are public, the ranking code's key is in the ROM, and save
data can be edited in an emulator. Use them for an honour-system ranking: validate, check plausibility, and keep
the right to remove entries.

## 1. Ranking code (English patch 1.1 and later)

16 characters in [Crockford base32](https://www.crockford.com/base32.html) (`0-9 A-Z` without `I L O U`),
shown as `XXXX XXXX` / `XXXX XXXX`. When reading input, ignore spaces and dashes, upper-case it, and read
`O` as `0` and `I`/`L` as `1`.

The 16 characters are 80 bits, most significant first, = 10 bytes `b0`-`b9`:

| Bits | Field | Values |
| --- | --- | --- |
| 4 | version | 1 |
| 4 | species | 1-3 Smallmouth Bass, 4-6 Largemouth Bass, 7 Bluegill, 8 Rainbow Trout, 9 Char (iwana), 10 Masu Trout (yamame), 11 Snakehead, 12 Catfish |
| 12 | size | tenths of a cm (0-4095; larger values are capped) |
| 12 | weight | tenths of a kg (0-4095, capped) |
| 4 | lure | 0 Popper, 1 Swisher, 2 Pencil Bait, 3 Suspend Minnow, 4 Floating Minnow, 5 Deep Crank, 6 Shallow Crank, 7 Vibration S, 8 Vibration L, 9 Spinnerbait, 10 Buzzbait, 11 Paddle Tail, 12 Craw, 13 Grub, 14 Straight Worm, 15 Stick Bait |
| 3 | colour | 0 Black Gold, 1 Hot Tiger, 2 Ayu, 3 Oikawa, 4 Watermelon, 5 Smoke, 6 Chartreuse, 7 Motor Oil |
| 3 | place | 0 Farm Pond, 1 Kasumigaura, 2 Lake Biwa, 3 Lake Ikehara, 4 Lake Hibara |
| 2 | season | 0 Spring, 1 Summer, 2 Autumn, 3 Winter |
| 2 | time | 0 Morning, 1 Midday, 2 Evening |
| 2 | weather | 0 Sunny, 1 Cloudy, 2 Rain |
| 16 | name hash | CRC-16/CCITT-FALSE of the angler's name (ASCII, case-sensitive, 1-10 letters) |
| 16 | check | CRC-16/CCITT-FALSE of the 8 ASCII bytes `BassRise` followed by `b0`-`b7` |

CRC-16/CCITT-FALSE: polynomial 1021h, initial value FFFFh, no reflection, no final XOR (check value of
`123456789`: 29B1h). "Followed by" means the CRC runs on, without resetting, from the key into `b0`-`b7`.

The website asks for the angler's name with the code and checks it against the name hash, so the full name is
known even though the code does not carry it. The three species values per bass are what the game stores;
what distinguishes them is *unknown* (perhaps size classes).

Example (a real catch, shown by the game): `2MCM 0480 01Z0 7GW1` with the name `ABLLLLLLLL` = Largemouth
Bass, 40.4 cm, 1.7 kg, Popper, Black Gold, Farm Pond, Spring, Morning, Sunny.

## 2. Original password (every version of the game)

10 bytes `b0`-`b9`. The English patch shows them as 20 hex digits on two lines; a Japanese cartridge shows each
byte as one symbol from a 256-entry table (`../password-table.md`; the decoder holds the table).

| Byte | Content |
| --- | --- |
| `b0`-`b1` | little-endian word: species (top 4 bits, as above) and size in tenths of a cm (low 12 bits) |
| `b2` | weight in tenths of a kg, **low byte only** (the real weight is this + n x 25.6 kg) |
| `b3` | place << 4 \| season << 2 \| time |
| `b4`-`b8` | the name: the high byte of each of the first 5 two-byte characters (815Bh "ー" -> 90h, 8151h "＿" -> 91h). On an English cartridge (one byte per letter) these are letters 2, 4, 6, 8 and 10; on a Japanese one only the kana row, so no usable name |
| `b9` | checksum: (`b0` + ... + `b8`) mod 256 |

No lure, colour, weather or full name. The checksum has no key.

Example: `5462253A42` / `4C4C4C4C87` = Largemouth Bass, 59.6 cm, 3.7 kg, Lake Ikehara, Autumn, Evening.

## 3. Suggested checks for a ranking

* The code decodes, the check (ranking code) or checksum (original) matches, and for a ranking code the name
  matches the name hash.
* Species, place, time and weather are in range; size and weight are not zero.
* Reject a code that is already on the board.
* Rank by size (Biggest Fish) or weight (Most Weight). Original passwords carry only the weight's low byte: rank
  them by size, or ask for the weight and accept it only if its low byte matches.
