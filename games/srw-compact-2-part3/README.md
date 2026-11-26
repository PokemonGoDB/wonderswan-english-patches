# Super Robot Taisen Compact 2 Part 3: Galactic Showdown - AI English translation patch v1.0

**Super Robot Taisen Compact 2 Part 3: Galactic Showdown** (スーパーロボット大戦コンパクト2 第3部 銀河決戦篇) is the third of three cartridges that tell one story: Banpresto's tactical-RPG crossover of the Super Robot Wars series for the monochrome WonderSwan (2001-02). You move your robots on a map, fight with spirit commands and weapons, and read the story between stages. This cartridge's story is set in: Dirad, Earth and space, the Dark Zone, Einst space and the epilogue at Axis. It was released only in Japan. This patch translates all the text the game shows into English. The other two parts are separate patches.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* **Everything the player reads:** the story scenes, the battle quotes, every menu, list and status page, the name-entry screen, the staff roll and the epilogue (21,588 text units in all, 17,021 of them drawn and checked in their real boxes).
* **Text drawn as pictures:** the episode cards, menu words, credit cards and the like were redrawn in English in the original's style.
* **Title screen:** the original art is kept untouched; an English line "PART 3: GALACTIC SHOWDOWN" sits below it.
* **Names and terms:** official English where it exists (the English releases of the Original Generation games for Banpresto's own characters, the licensed anime releases for the rest) and the fan-standard forms otherwise; the sources are in `games/srw-compact-2/termbase.json`.
* **Letter size:** story text uses a 12 px face, as tall as the original's kana; menus, lists and battle quotes use a 9 px face because the original's fields are narrow, and a few labels are shortened (for example "Clr. Data", "Dbl Img 2", "Wtr Gnd").
* **Saves and clear data:** the patch keeps the original's save and clear-data code; clear data passes between the parts as in the Japanese game.
* **Stays as it was:** the credits' own typos (Coodinator, Programer, Scienario, Exective, BANPRESOFT, Charactor), "Episode1" and "Last Episode".

**How it was made: AI translation, independent checks, human decisions**

* Claude worked out the game's text format (one id table, banks of messages and quotes, a names block, cut-in and prologue tables), wrote the English, redrew the picture text and rebuilt the ROM, repacking text into free space so that lines fit the original boxes. The ROM stays 4 MiB, like the original.
* The final build (d14) went through the project's automated test run: 16 of 17 checks passed. The one that did not is the random-play soak: from one saved state the screen held still a little longer than on the original. That same flag has come up in every run since early builds; the frames were looked at each time and nothing was wrong on screen. The run includes:
  * every string decoded, re-encoded and rebuilt byte for byte; no Japanese text candidate uncovered;
  * 17,021 text units drawn by the game's own renderer: 0 flagged; the same sweep on the original flags Japanese, so the check can see it;
  * 90 starts from saved states across the game, 323,717 frames of menus, map and dialogue: no Japanese on screen at runtime; the same run on the original sees it;
  * attract mode and the endings and credits on both ROMs, 175 inventory screens paired with the original, and the measured alignment audit.
* The English was read against the Japanese by independent read-only Claude reviewers; the screens that changed after each review were looked at again on enlarged side-by-side pictures.
* The mechanics were audited (name entry and name limits, name comparisons, save and clear-data code, widest values).
* All 47 decision items (names, wording, lettering, the title screens) were put to the owner and answered.

**What was not seen on screen** (please report anything odd)

* HUD icons and the evade / defend icons, the battle-screen box for cut-ins, the timers of timed messages
* the widest hero / partner names on the unit list, the forecast and the status box; turns 9999 and funds 9999999 on the map status box and the unit lists
* the hero name drawn by a message from a save made with the English keyboard (the capture shows the garble of a Japanese save)
* FD 07 name substitutions (checked by bytes only); part 3 has no data-transfer entry on its title menu and its record writer was not reached
* **The game was not played from start to finish by a person**, and not on real hardware.

**Changelog**

* **v1.0**: first public release.

**Sources consulted**

* Japanese text: the WonderSwan ROM itself.
* English names and terms: the English releases of Super Robot Wars Original Generation, the licensed English releases of the anime (Discotek, Bandai, Media Blasters, ADV and others), Gundam.info and fan wikis; per-term sources are in `games/srw-compact-2/termbase.json`.
* The project's own notes on the game's text format (`games/srw-compact-2/TEXT-FORMAT.md`) and the QA run summaries.
* I looked for another English translation: gametranslate.us lists this part as in progress with no released patch (seen 2026-11-25). If a human translation is released, that one should be preferred.

**Images** (original on the left, English on the right)

1. Title screen: the original art with an English PART 3: GALACTIC SHOWDOWN line below it

   ![Title screen: the original art with an English PART 3: GALACTIC SHOWDOWN line below it](images/01-title.png)

2. Title menu

   ![Title menu](images/02-title-menu.png)

3. Hero setup

   ![Hero setup](images/03-hero-setup.png)

4. Name entry

   ![Name entry](images/04-name-entry.png)

5. Story dialogue with portrait

   ![Story dialogue with portrait](images/05-story-dialogue.png)

6. Episode title card

   ![Episode title card](images/06-episode-card.png)

7. Map menu

   ![Map menu](images/07-map-menu.png)

8. Unit command menu

   ![Unit command menu](images/08-unit-command-menu.png)

9. Unit status

   ![Unit status](images/09-unit-status.png)

10. Weapon list

   ![Weapon list](images/10-weapon-list.png)

11. Attack forecast

   ![Attack forecast](images/11-attack-forecast.png)

12. Battle scene with a quote

   ![Battle scene with a quote](images/12-battle-quote.png)

13. Rewards box (Credits and EXP)

   ![Rewards box (Credits and EXP)](images/13-rewards-box.png)

14. Intermission menu

   ![Intermission menu](images/14-intermission-menu.png)

15. Upgrade list

   ![Upgrade list](images/15-upgrade-list.png)

16. Clear data import prompt

   ![Clear data import prompt](images/16-clear-data-import.png)

**How to patch**

Apply the BPS file to the Japanese ROM **Super Robot Taisen Compact 2 - Dai-3-bu - Ginga Kessen Hen (Japan).ws** (4,194,304 bytes, CRC32 `0B0F8981`) in your browser with the [Swan Revival patcher](https://swanrevival.com/patcher/), or with Floating IPS, beat or ROM Patcher JS. The result is 4,194,304 bytes:

* Standard: `srw-compact-2-part3-en-1.0.bps`; the result should be CRC32 5ACF62C7.

It's a monochrome WonderSwan game, so keep the .ws extension. You must provide your own copy of the original Japanese game to apply it. The patch only fits this dump (CRC32 `0B0F8981`); another revision is refused or gives a wrong result.

**Download:** `srw-compact-2-part3-en-1.0.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/srw-compact-2-part3-v1.0).

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
