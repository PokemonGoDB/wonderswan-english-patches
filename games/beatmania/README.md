# beatmania for WonderSwan (WonderSwan) - AI English translation patch for Practice mode v1.0

**beatmania for WonderSwan** is Konami's 1999 port of the arcade DJ rhythm game, for the original (monochrome) WonderSwan, released only in Japan. You hold the console sideways and scratch and key your way through club tracks. Almost everything in it is already in English: menus, options, song info, results, name entry, records and the staff roll. The one exception is Practice mode, where DJ KONAMI coaches you in Japanese subtitles through the tutorial and two practice songs, then challenges you to a DJ battle.

This patch translates those 77 subtitle lines into English. Nothing else in the game changes.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person made every judgement call and played Practice mode before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It isn't up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* All 77 of DJ KONAMI's lines: the Practice-mode tutorial, both practice songs, and the DJ battle challenge with its three verdicts.
* Kept as written in the original: "DJ KONAMI", lowercase "beatmania", and the capitalised game terms that the menus already use (AMBIENT, FUNK, OPTION, KEYSET, FREE PLAY, START).

DJ KONAMI keeps his attitude: he's a cocky club DJ, so the English is casual and a little rude ("Come back when you're ready.", "Newcomer, you're on a roll.").

**How it was made: AI translation, independent checks, human decisions**

* The subtitles are pictures, not text, so each line was transcribed from the ROM's images and checked on screen.
* Claude translated the lines and redrew each picture with a proportional pixel font. A separate Claude reviewer checked every line against the Japanese, then a polish pass made the lines sound natural.
* Every line was drawn by the game itself in an emulator and compared pixel for pixel with the new picture: 77 lines, none clipped. A random walk through the menus and modes on the English ROM found no Japanese subtitle tiles (the same walk on the original finds them).
* The judgement calls were listed with the Japanese, a literal reading and the options, and I decided each one by hand. They include tone, terms and the font. Then I played Practice mode.

**Changelog**

* **v1.0**: first release.

**Sources consulted**

* Japanese text: the subtitle images in the ROM itself.
* Font: a proportional pixel font drawn for our other WonderSwan patches.

**How to patch**

Apply the BPS to the Japanese ROM "Beatmania for WonderSwan (Japan)" (CRC32 324622C9) with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 513EE998. The ROM keeps its size (16 MB), so it runs on the same flash carts as the original. It's a WonderSwan (mono) game, so keep the .ws extension.

You must provide your own copy of the original Japanese game to apply it.

**Download:** [`beatmania-en-1.0.bps`](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/beatmania-v1.0) on its release page.

**Known issues**

* The DJ battle comes before the special song, which seems to unlock at stage 5 or later once all ten songs are cleared. Its lines were checked in English on screen, but nobody has reached it in normal play yet. If you have a save that gets there, tell me how it looks.
* Each subtitle stays on screen for about 1.3 to 2 seconds, timed to the music as in the original. English lines are longer than the Japanese, so a few go by quickly.

**Technical notes (for the curious)**

* Each subtitle is a 128×16 bitmap in a fixed 512-byte slot. The patch redraws each picture in place, so no code, pointers or memory use change.

Translation and graphics: made with AI (Claude), with every judgement call decided by hand. Please don't upload it to romhacking sites. Feedback and bug reports are very welcome!
