# Densha de Go! (WonderSwan) - AI English translation patch v1.0

**Densha de Go!** is Taito's train-driving simulator for the original WonderSwan, released only in Japan. Keep to the timetable, obey the signals, and stop on the mark, while your conductor grades every stop. Four lines: San'in, Keihin-Tohoku, Tokaido and Yamanote.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

The game has no font: every word is a picture, and all of them were redrawn.

* Line select, departure board, and route strips with JR's English station names.
* The driving HUD, signs and run messages (Depart!, Pull Forward, ATS Brake...).
* All 27 conductor bubbles, results, continue, pause and options. GO BY TRAIN! was added next to the title logo.
* Left as art: the title logo and the platform station boards.

**How it was made**

* Claude translated every picture with Japanese in it directly from the Japanese in the ROM and did all the hacking.
* Separate Claude reviewers checked everything against the Japanese, and every redrawn screen was checked in an emulator.
* I made the judgement calls by hand: station names, sign wording, and what to leave as art.

**Changelog**

* **v1.0**: first release.

**Images** (original on the left, English on the right)

1. Title

   ![Title](images/01-title.png)

2. Line select

   ![Line select](images/02-line-select.png)

3. Departure board

   ![Departure board](images/03-departures.png)

4. Route strip

   ![Route strip](images/04-route-strip.png)

5. Driving

   ![Driving](images/05-driving.png)

6. Results

   ![Results](images/06-results.png)

7. The conductor

   ![The conductor](images/07-conductor.png)

8. Continue?

   ![Continue?](images/08-continue.png)


**How to patch**

Apply the BPS to "Densha de Go! (Japan)" (CRC32 B62E5DD0) with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 A8ACDDA0. Keep the .ws extension. You need your own copy of the Japanese game.

**Download:** `densha-de-go-en-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/densha-de-go-v1.0).

**Known issues**

* Not played start to finish by a person. Please tell me which line and where if you find leftover Japanese.

**Technical notes (for the curious)**

* Every word is a compressed picture: the patch decompresses, redraws and recompresses each one, so the ROM doesn't grow.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
