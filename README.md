# WonderSwan English patches

English translation patches for Japanese-only WonderSwan and WonderSwan Color games.

> **Please read:** these translations were made **with AI** (Claude), as a hobby project. A person decided every
> judgement call (names, sensitive terms, departures from the literal text) and played each game before release.
> Nobody on the project is a professional translator. Please **don't upload these patches to romhacking sites**
> (romhacking.net and the like).

## Patches

| Game | System | Version | Patch | Original ROM (CRC32) | Patched ROM (CRC32) |
| --- | --- | --- | --- | --- | --- |
| [One Piece: Grand Battle Swan Colosseum](games/grand-battle/README.md) | WonderSwan Color | [1.2](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/grand-battle-v1.2) | BPS | `F8A1DD2B` | `A10DA837` |
| [beatmania for WonderSwan](games/beatmania/README.md) (Practice mode) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/beatmania-v1.0) | BPS | `324622C9` | `513EE998` |

Each game's page lists what's translated, how it was made, known issues and technical notes. The patch files are on
the [Releases](https://github.com/PokemonGoDB/wonderswan-english-patches/releases) page.

## How to patch

1. Get your own copy of the original Japanese ROM. Check its CRC32 against the table: a different revision won't work.
2. Apply the patch with [Floating IPS](https://www.smwcentral.net/?p=section&a=details&id=11474),
   beat, or [ROM Patcher JS](https://www.marcrobledo.com/RomPatcher.js/). BPS patches check the source ROM and refuse
   the wrong one.
3. Keep the file extension: `.wsc` for WonderSwan Color games, `.ws` for WonderSwan games.

No ROMs are distributed here.

## Bug reports

If you find leftover Japanese, cut-off text or a crash, open an issue that names the game, the version and where it
happened. A save state or screenshot helps.

## See also

Gio-74's [WonderSwan Color AI translations](https://github.com/mariovirgili/WonderSwanColor-AI_Translation).
