# Anchorz Field (WonderSwan) - AI English translation patch v1.0

**Anchorz Field** is Sammy's 1999 turn-based territory game for the original WonderSwan, released only in Japan. Fire anchors that drag lines across the field, enclose land, and be the first to hold the target share. You're the rookie on Sharvan's national Anchorz team, taking on rival nations and their very odd crews.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* All 843 text strings: campaign, battle dialogue, rival crews, rules, menus, lists and options.
* The five illustrated intro pages, plus the Sort button and the intro's FIRE!! effect.
* Left as art: the katakana above the title logo (the logo already reads ANCHOR FIELD).

**How it was made**

* Claude translated the script directly from the Japanese in the ROM and did all the hacking.
* Separate Claude reviewers checked everything against the Japanese, and every string was rendered in an emulator to catch overflow and leftover Japanese.
* I made the judgement calls by hand: names, the rival crews' accents and puns, and which art to keep.

**Changelog**

* **v1.0**: first release.

**Images** (original on the left, English on the right)

1. Intro story

   ![Intro story](images/01-story-intro.png)

2. Intro story: the treaty

   ![Intro story: the treaty](images/02-story-treaty.png)

3. Title menu

   ![Title menu](images/03-title-menu.png)

4. The Selection Match

   ![The Selection Match](images/04-selection-match.png)

5. The rules

   ![The rules](images/05-rules.png)

6. Your adviser

   ![Your adviser](images/06-adviser.png)

7. Anchor Machine stats

   ![Anchor Machine stats](images/07-anchor-machine.png)

8. In battle

   ![In battle](images/08-battle.png)

9. Options

   ![Options](images/09-options.png)


**How to patch**

Apply the BPS to "Anchorz Field (Japan)" (CRC32 425EB893) with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 34A7D483. Keep the .ws extension. You need your own copy of the Japanese game.

**Download:** `anchorz-field-en-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/anchorz-field-v1.0).

**Known issues**

* Not played start to finish by a person, and a few rare screens weren't reached. Please tell me where you find leftover Japanese, cut text or a crash.
* "★Special Stage" is missing its closing star. So is the original's, so it was kept.

**Technical notes (for the curious)**

* A new variable-width text engine fits the English into the original fixed-width boxes.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
