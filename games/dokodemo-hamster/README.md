# Dokodemo Hamster (WonderSwan) - AI English translation patch v1.0 (+ Long Names edition, may be buggy)

**Dokodemo Hamster** is BEC's 1999 virtual pet for the original WonderSwan, released only in Japan. A hamster arrives from Hamster Village; you feed it, teach it words, and it writes you letters, learns tricks and chatters in baby talk, chu.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* All of the hamster's talk and letters (about 1,100 messages), menus, items, foods and 20 tricks.
* 55 built-in English words, an English name-entry grid, and the title logo redrawn as DOKODEMO HAMSTER.
* Sentences that insert words you taught were reworded so any word fits.

**Long Names edition (may be buggy):** names and taught words up to 10 letters instead of 6, with its own save, which isn't compatible with the standard edition's. It's newer and less tested, so play the standard edition first and use this at your own risk.

**How it was made**

* Claude translated the script directly from the Japanese in the ROM and did all the hacking.
* Separate Claude reviewers checked everything against the Japanese, and every message was rendered in an emulator.
* I made the judgement calls by hand: the baby talk, the logo, puns and trick names.

**Changelog**

* **v1.0**: first release.

**Images** (original on the left, English on the right)

1. Title

   ![Title](images/01-title.png)

2. Intro: from Hamster Village

   ![Intro: from Hamster Village](images/02-intro-1.png)

3. Intro: words, mail and tricks

   ![Intro: words, mail and tricks](images/03-intro-2.png)

4. Intro: a strange little hamster

   ![Intro: a strange little hamster](images/04-intro-3.png)

5. Your hamster says hello

   ![Your hamster says hello](images/05-hamster-greeting.png)

6. Name entry

   ![Name entry](images/06-name-entry.png)


**How to patch**

Apply the BPS to "Dokodemo Hamster (Japan)" (CRC32 89E7D950) with Floating IPS, beat or ROM Patcher JS. Standard: CRC32 F67C5588. Long Names: CRC32 22F04AF5. Keep the .ws extension. You need your own copy of the Japanese game.

**Download:** `dokodemo-hamster-en-1.0.bps`, `dokodemo-hamster-en-long-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/dokodemo-hamster-v1.0).

**Known issues**

* Not played start to finish by a person. Please tell me what your hamster was doing if you find leftover Japanese, cut text or a crash.
* Link play is translated but untested.

**Technical notes (for the curious)**

* English uses a new narrow 8-pixel font, so twice as many letters fit in the original 16-pixel cells.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
