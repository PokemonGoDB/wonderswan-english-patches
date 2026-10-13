# Bakusou Dekotora Densetsu for WonderSwan (WonderSwan) - AI English translation patch v1.0 (+ special edition, may be buggy)

**Bakusou Dekotora Densetsu** is KID and Kaga Tech's 1999 trucking-and-racing game about *dekotora*, Japan's lit-up decorated trucks, released only in Japan. You promised your girlfriend Yukie you'd become Japan's No. 1 trucker: haul cargo across 20 cities, race rivals over the CB radio for their parts, climb to the boss in Hokkaido, and meet six women along the way. Earnest, corny, hot-blooded melodrama.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* The whole script (about 4,900 lines), menus, name entry, races, results and credits.
* Graphics: the title buttons (ALL JAPAN / VS LINK), 208 hub, garage, shop and report labels, and the race and showdown banners.
* Left as art: the title logo, the side banners, and three kanji on the two-player course map.

**Content note:** it's a 1999 trucker melodrama: kidnapping threats, smugglers, drunks, butt-pat jokes and some sexist characters. Nothing was softened or added.

**Special edition (may be buggy):** puts the developers' hidden Event Select on the start menu, so with a saved game you can play any of the 200 events. There's no way back out except picking an event. It's rougher than the standard patch, so play that first and use this at your own risk.

**How it was made**

* Claude translated the script directly from the Japanese in the ROM and did all the hacking.
* Separate Claude reviewers checked everything against the Japanese, and all 4,252 printed lines were rendered in an emulator and all 200 story events were run.
* I made the judgement calls by hand: names, tone, and the game's rougher content.

**Changelog**

* **v1.0**: first release.

**Images** (original on the left, English on the right)

1. Title menu

   ![Title menu](images/01-title-menu.png)

2. The promise to Yukie

   ![The promise to Yukie](images/02-yukie.png)

3. Kumi

   ![Kumi](images/03-kumi.png)

4. Pops' parts shop

   ![Pops' parts shop](images/04-parts-shop.png)

5. Racing a rival

   ![Racing a rival](images/05-race.png)

6. Arriving at Shizuoka

   ![Arriving at Shizuoka](images/06-arrival.png)

7. Parts taken from a rival

   ![Parts taken from a rival](images/07-parts-taken.png)

8. Roamer

   ![Roamer](images/08-roamer.png)

9. Report screen

   ![Report screen](images/09-report.png)


**How to patch**

Apply the BPS to "Bakusou Dekotora Densetsu for WonderSwan (Japan)" (CRC32 392DD813) with Floating IPS, beat or ROM Patcher JS. Standard: CRC32 E7B6B96E. Special edition: CRC32 37431865. The English ROM is 4 MB (the original is 2 MB), so use an emulator or a flash cart that takes 32 Mbit ROMs. Keep the .ws extension. You need your own copy of the Japanese game.

**Download:** `dekotora-en-1.0.bps`, `dekotora-en-special-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/dekotora-v1.0).

**Known issues**

* Not played start to finish by a person. Please tell me where you find leftover Japanese, cut text or a crash.
* A very long part name can run under the border in the Parts Taken list.
* VS LINK screens are translated but untested.

**Technical notes (for the curious)**

* A variable-width dialogue font fits the English into the original boxes; the ROM was expanded for the longer text.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
