# Tane o Maku Tori: The Bird Who Sowed Seeds (WonderSwan) - AI English translation patch v1.0

**Tane o Maku Tori** (たねをまく鳥) is a small game by T. Suzuki that came out of Bandai's D's Garage 21 game contest and was released on cartridge in 1999 for the original (monochrome) WonderSwan, only in Japan. You hold the console upright. It opens with a hand-lettered picture book: a crow who was always alone makes a friend from the south, the friend leaves at the end of summer promising to come back when the land is full of flowers, and the crow takes a seed in its beak and flies off. Then you play the crow.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

There's no text font in this game: every word is a picture. All of these were redrawn:

* Every page of the picture-book story, hand-lettered in English in the game's shades.
* The title logo, now "Tane o Maku Tori / The Bird Who Sowed Seeds".
* The menu, the stage cards and in-game words (STAGE, Game Start, Clear, Game Over, Pause, PTS), the results screens (Score Tally, Time Left, Accuracy), and the National Best and Personal Best score screens.
* The WonderGate phone screen's labels.
* Left in Japanese, on purpose: the WonderGate status messages. They only appear with the long-dead WonderGate mobile adapter.

The story is written as simple picture-book English, to match the original's gentle tone.

**How it was made: AI translation, independent checks, human decisions**

* Claude transcribed the vertical hand lettering, translated it, and set the English in a handwriting font in the game's three shades, then rebuilt each page's tiles and recompressed them.
* A separate Claude review went through the whole patch against the Japanese and found the results screens still in Japanese; they were translated before release.
* Every story page and screen was checked in an emulator from power-on.
* The judgement calls were listed with the Japanese, a literal reading and the options, and I decided each one by hand: the lettering style, the English title, two candidate tones for the story, and the logo.

**Changelog**

* **v1.0**: first release.

**Sources consulted**

* Japanese text: the pictures in the ROM itself.
* Font: Kalam Bold (Indian Type Foundry, SIL Open Font License).

**Images** (original on the left, English on the right)

1. Title screen

   ![Title screen](images/01-title.png)

2. The crow was always alone

   ![The crow was always alone](images/02-story-1.png)

3. A friend from the south

   ![A friend from the south](images/03-story-2.png)

4. Every day was fun

   ![Every day was fun](images/04-story-3.png)

5. The end of summer

   ![The end of summer](images/05-story-4.png)

6. "I wanted to talk so much more..."

   !["I wanted to talk so much more..."](images/06-story-5.png)

7. The friend's promise

   ![The friend's promise](images/07-story-6.png)

8. Alone once again

   ![Alone once again](images/08-story-7.png)


**How to patch**

Apply `tane-o-maku-tori-en-1.0.bps` to the Japanese ROM "D's Garage 21 Koubo Game - Tane o Maku Tori (Japan)" (CRC32 B1CAEC06) with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 40EC6A1D.

The ROM keeps its size (1 MB). It's a WonderSwan (mono) game, so keep the .ws extension.

You must provide your own copy of the original Japanese game to apply it.

**Download:** `tane-o-maku-tori-en-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/tane-o-maku-tori-v1.0).

**Known issues**

* It hasn't been played start to finish by a person. If you find leftover Japanese, cut text or a crash, please tell me where it happened.
* The WonderGate status messages stay Japanese (see above).

**Technical notes (for the curious)**

* Every screen is stored rotated 90° and run-length compressed. The patch composes each page upright, replaces the lettering, re-tiles it and compresses it again into free space in the ROM.
* The English text appears top to bottom with the page, instead of the original's right-to-left wipe that followed the vertical Japanese columns.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
