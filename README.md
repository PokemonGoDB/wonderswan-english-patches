# WonderSwan English patches

English translation patches for Japanese-only WonderSwan and WonderSwan Color games.

> **Please read:** these translations were made **with AI** (Claude), as a hobby project. A person (me) decided every
> judgement call (names, sensitive terms, departures from the literal text) before release.
> Nobody on the project is a professional translator. Please **don't upload these patches to romhacking sites**
> (romhacking.net and the like).

## Patches

| Game | System | Version | Patch | Original ROM (CRC32) | Patched ROM (CRC32) |
| --- | --- | --- | --- | --- | --- |
| [One Piece: Grand Battle Swan Colosseum](games/grand-battle/README.md) | WonderSwan Color | [1.2](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/grand-battle-v1.2) | BPS | `F8A1DD2B` | `A10DA837` |
| [beatmania for WonderSwan](games/beatmania/README.md) (Practice mode) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/beatmania-v1.0) | BPS | `324622C9` | `513EE998` |
| [Anchorz Field](games/anchorz-field/README.md) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/anchorz-field-v1.0) | BPS | `425EB893` | `34A7D483` |
| [Bakusou Dekotora Densetsu for WonderSwan](games/dekotora/README.md) (+ special edition, may be buggy) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/dekotora-v1.0) | BPS | `392DD813` | `E7B6B96E` (special `37431865`) |
| [Chou Denki Card Battle: Youfu Makai](games/youfu-makai/README.md) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/youfu-makai-v1.0) | BPS | `56E2C069` | `CB5FACF7` |
| [Densha de Go!](games/densha-de-go/README.md) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/densha-de-go-v1.0) | BPS | `B62E5DD0` | `A8ACDDA0` |
| [Dokodemo Hamster](games/dokodemo-hamster/README.md) (+ Long Names edition, may be buggy) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/dokodemo-hamster-v1.0) | BPS | `89E7D950` | `F67C5588` (Long Names `22F04AF5`) |
| [Tane o Maku Tori: The Bird Who Sowed Seeds](games/tane-o-maku-tori/README.md) | WonderSwan | [1.0](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/tane-o-maku-tori-v1.0) | BPS | `B1CAEC06` | `40EC6A1D` |

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
