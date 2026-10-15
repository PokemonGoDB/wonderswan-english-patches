# Chou Denki Card Battle: Youfu Makai (WonderSwan) - AI English translation patch v1.0

**Chou Denki Card Battle: Youfu Makai** (超伝奇カードバトル 妖符魔界) is a 1999 card battle game from Kobunsha and Kappa Games for the original (monochrome) WonderSwan, released only in Japan. The scenario is by Hideyuki Kikuchi (*Vampire Hunter D*, *Demon City Shinjuku*) and the art by Ayami Kojima. It's set in Kikuchi's Demon City Shinjuku, and its story runs in three parts, told as illustrated pages of prose between battles with Demon Cards. You build a 30-card deck, lay cards on a field where each card's arrows set the direction it attacks, and win by covering the field with your own cards.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* The whole story, all three parts (Crimson Lotus, Cursed Cards, Fusion), as horizontal English prose in place of the vertical Japanese.
* Every card name, the menus (Scenario, Those in the Way, Worthy Rival, Card Craft...), the deck rules, the battle screens, and the save and erase prompts.
* Graphics: the title logo becomes YOUFU MAKAI with the subtitle "Realm of Demon Cards"; the chapter cards; the brush-lettered result screens (DEFEAT, OUT OF CARDS...); and the attribute emblems as letter badges.
* The staff credits, romanized.

Names: the hero of part 1 is never named, so he's "the Bodyguard". The two characters who are both read Masami become Masami (the boy) and Lady Masami (the woman in white). Kikuchi's own characters, such as Gyoshiro Shikabane and Setsura Aki, follow his official English editions. The cards are Demon Cards, the binder is the Demon Book, and a duel is a Demon Duel.

**How it was made: AI translation, independent checks, human decisions**

* Claude translated the story and cards directly from the Japanese in the ROM, and did all the hacking: the story is stored as pre-drawn text pictures, so every English page was typeset and rendered into the game's format, along with a new card-name font and the redrawn graphics.
* A second, independent Claude reviewer checked the text against the Japanese, and a final separate review read the whole patch again; the names and story lines it questioned were corrected.
* Every story page was rebuilt from the finished ROM and compared on screen, and a random walk through menus, story, decks and battles found no Japanese reaching the screen.
* The judgement calls were listed with the Japanese, a literal reading and the options, and I decided each one by hand: the logo, names and terms from Kikuchi's world, the menu titles, uncertain card readings, and a few deliberately ambiguous lines.

**Changelog**

* **v1.0**: first release.

**Sources consulted**

* Japanese text: the WonderSwan ROM itself.
* Names and terms: the official English editions of Kikuchi's *Demon City Shinjuku* (Digital Manga, 2011) and *Yashakiden* (Digital Manga, tr. Eugene Woodbury).

**Images** (original on the left, English on the right)

1. Title screen

   ![Title screen](images/01-title.png)

2. Main menu

   ![Main menu](images/02-main-menu.png)

3. A story page

   ![A story page](images/03-story.png)

4. Deck screen

   ![Deck screen](images/04-deck.png)

5. In battle

   ![In battle](images/05-battle.png)

6. Erase save data?

   ![Erase save data?](images/06-erase-save.png)


**How to patch**

Apply `youfu-makai-en-1.0.bps` to the Japanese ROM "Chou Denki Card Game - Youfu Makai - Kikuchi Shuukou (Japan)" (CRC32 56E2C069) in your browser with the [Swan Revival patcher](https://swanrevival.com/patcher/), or with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 CB5FACF7.

The English ROM is 4 MB (the original is 2 MB), because the English story pages are stored as pictures: use an emulator or a flash cart that takes 32 Mbit WonderSwan ROMs. It's a WonderSwan (mono) game, so keep the .ws extension.

You must provide your own copy of the original Japanese game to apply it.

**Download:** `youfu-makai-en-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/youfu-makai-v1.0).

**Known issues**

* It hasn't been played start to finish by a person. If you find leftover Japanese, cut text or a crash, please tell me where it happened.
* A few card names are best guesses at readings that no source confirms.

**Technical notes (for the curious)**

* The original story text is vertical. The English is laid out horizontally and stored as about 330 KB of pre-drawn text cells, which is why the ROM doubled in size; the original image is the upper half of the new ROM, so the game's own bank settings still find it.
* Card names use a new outlined mixed-case font; names too wide for it fall back to a narrower one.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
