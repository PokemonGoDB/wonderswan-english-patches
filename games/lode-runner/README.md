# Lode Runner for WonderSwan (WonderSwan) - AI English translation patch v1.0 (+ Swan Revival Edition, Color Edition by Gio)

**Lode Runner for WonderSwan** is Banpresto's version of the classic dig-and-collect puzzle game, developed by Aisystem Tokyo and released only in Japan in 2000 for the original (monochrome) WonderSwan. You run, climb and dig holes to trap the guards while you collect every pile of gold. Story Mode follows a diver who finds a lost golden kingdom under the sea. There's also Select Mode, the original Lode Runner maps, a map editor with two save slots, map trading over the link cable (Data I/O), and DOWN LOAD, which fetched new stages through Bandai's Mobile WonderGate phone adapter.

This patch translates it into English.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* **Everything on screen:** the menus and prompts, the map editor, Data I/O, Option (viewing and deleting save data), the chapter tally, the phone-number keypad, and the WonderGate download screens with all 21 error messages. The game has no text font: every Japanese word is a picture, and the English is lettered into the same places.
* **Story:** all five chapters and the ending, for both heroes. The male hero (俺) is blunt and the female hero (わたし) softer. Which hero you get follows the owner's gender set in the WonderSwan's own settings, as in the original.
* **Title logo:** the katakana ロードランナー is replaced by an English LODE RUNNER, drawn in the style of the original lettering over the original rock art.
* **Left as it is:** the game's own English: the mode plates (STORY MODE, SELECT MODE, MAP EDIT, DATA I/O, DOWN LOAD, OPTION), STAGE CLEAR!, the HUD and the staff credits.

**Names and terms**

Chapter 2, 「ロマン」, is "Wonder": the loan word means adventure and awe here, not romance. The phone keypad's three keys are "Clr", "Done" and "Init", because each key is only 22 pixels wide. "DOWN LOAD" stays two words, as the game spells it on its own plate.

**Swan Revival Edition (optional)**

A second English patch adds stage sharing through the game's own WonderGate menu, for Swan Revival (swanrevival.com), the community's WonderGate revival:

* **Upload a Stage:** send a map from MAP 1 or MAP 2 with a title and, if you like, your name. The cartridge remembers the name. Stages are reviewed before they appear in the list.
* **Download a Stage:** a list of up to 40 player-made stages with their titles, authors and dates. The stage you pick opens in the map editor, as in the original.
* The title screen and an info screen say that this is an unofficial edition by Swan Revival, not made or endorsed by Banpresto or Bandai.

Gameplay, the map editor, Data I/O and the save format are unchanged: maps still trade over the link cable as before, and saves work in every version.

There is also a **Japanese-text** build of the edition: the original Japanese game with the same stage sharing, its new screens written in Japanese in the game's own lettering. It's for players who want the original game and only the new feature.

> **Note:** Upload and the new Download list need Swan Revival's stage-sharing service. Until it is live, they show the game's own "could not connect" errors. Everything else works offline.

**Color Edition, colorized by Gio (optional)**

[Gio-74](https://github.com/mariovirgili/WonderSwanColor-AI_Translation) has colorized this translation for the WonderSwan Color. The colorization is entirely Gio's work, and all the credit for it goes to Gio. The English text and pictures are this project's v1.0 patches, unchanged; Gio's patches add only the color.

There are two Color Edition patches, both Gio's v0.9:

* **Color Edition:** the standard English patch, in color.
* **Swan Revival Color Edition:** the English Swan Revival Edition, in color.

What Gio colored:

* **Stages:** the gold, ladders, bricks (also while they are dug and grow back), steel blocks and the deep-blue background each have their own colors. The hero (in the diving suit too), the guards and the sea creatures have their own palettes.
* **Title screen:** gold LODE RUNNER letters on blue-grey rock over a blue brick floor, with the hero and the guard in color.
* **Menus and windows:** a terracotta brick background and navy windows.
* **Story pictures:** drawn in deep-blue ink.
* The game's own fades still work, because the colors follow the original shades every frame.

Each Color Edition patch contains the translation too: apply it to the original Japanese ROM, not to an already patched one. The result is a WonderSwan Color game. It needs a WonderSwan Color or SwanCrystal, or an emulator set to WonderSwan Color.

Gio made the colorization with AI (Claude) and shares it as it is, on the same terms as the translation: please don't upload it to romhacking sites.

**How it was made: AI translation, independent checks, human decisions**

* Claude found and rendered every picture in the ROM: 87 screen maps in 10 tile sets, plus the story script. It wrote the English, then lettered it into new tiles that the game loads alongside each screen.
* A separate, independent Claude reviewer read the whole game against the Japanese. Its 13 findings were checked and fixed. The Swan Revival Edition's screens had their own review (16 findings, fixed), and its Japanese text was reviewed by another separate agent (no meaning errors; its wording fixes were applied).
* On screen:
  * all 87 edited maps were drawn by the game's own code and matched the expected pictures;
  * 15 scripted tours (menus, story for both heroes, both endings, editor, Data I/O, DOWN LOAD, keypad, Option) and long random walks found no Japanese left on the English build;
  * 10 minutes of the attract mode were captured with no input;
  * the text alignment was measured on every screen.
* Link cable: the English cartridge traded maps with an original Japanese cartridge in both directions.
* Online: the WonderGate sessions were played for real against private copies of Swan Revival's server, on the original and patched ROMs. That covers the download, every upload result, the stage list, and the connection and server errors. The live server was not used for testing.
* The judgement calls (the logo, names, terms, the keypad labels, and for the edition its name, wording and protocol) were listed with the options, and I decided all of them by hand: 13 for the translation and 12 for the edition.

**Changelog**

* **v1.0**: first release, with the Swan Revival Edition (English and Japanese-text) 1.0.
* **Color Edition v0.9** (added 2026-11-13): Gio's colorization of the v1.0 English patch and of the English Swan Revival Edition, as two extra patches. The translation itself is still v1.0.

**Sources consulted**

* Japanese text: the WonderSwan ROM itself.
* WonderGate behaviour: the game's code and Swan Revival's notes on this game.
* Lettering: Shinonome 12-dot (public domain) for the English text; the title logo is hand-drawn; the Japanese-text edition's new screens use the game's own lettering.
* Color Edition: Gio's v0.9 release and its notes (README and HowItsMade). Colorization by [Gio-74](https://github.com/mariovirgili/WonderSwanColor-AI_Translation).

**Images** (1-9: original on the left, English on the right; 10-14: Swan Revival Edition, English on the left, Japanese-text on the right)

1. Title screen

   ![Title screen](images/01-title.png)

2. Main menu

   ![Main menu](images/02-main-menu.png)

3. Story Mode

   ![Story Mode](images/03-story.png)

4. Map Edit

   ![Map Edit](images/04-map-edit.png)

5. Map editor menu

   ![Map editor menu](images/05-editor-menu.png)

6. WonderGate: getting ready to connect

   ![WonderGate: getting ready to connect](images/06-wondergate-get-ready.png)

7. WonderGate: an error message

   ![WonderGate: an error message](images/07-wondergate-error.png)

8. Phone number keypad

   ![Phone number keypad](images/08-phone-number.png)

9. Ending

   ![Ending](images/09-ending.png)

10. Swan Revival Edition: title screen

    ![Swan Revival Edition: title screen](images/10-swan-revival-title.png)

11. Swan Revival Edition: DOWN LOAD menu

    ![Swan Revival Edition: DOWN LOAD menu](images/11-swan-revival-menu.png)

12. Swan Revival Edition: the stage list (test data)

    ![Swan Revival Edition: the stage list](images/12-swan-revival-stage-list.png)

13. Swan Revival Edition: entering your name for an upload

    ![Swan Revival Edition: entering your name](images/13-swan-revival-upload-name.png)

14. Swan Revival Edition: an upload sent (test server)

    ![Swan Revival Edition: an upload sent](images/14-swan-revival-upload-result.png)

**How to patch**

Apply one of the BPS files to the Japanese ROM "Lode Runner for WonderSwan (Japan)" (CRC32 E407CABF) in your browser with the [Swan Revival patcher](https://swanrevival.com/patcher/), or with Floating IPS, beat or ROM Patcher JS:

* Standard: `lode-runner-en-1.0.bps`, the result should be CRC32 A88BABE0.
* Swan Revival Edition: `lode-runner-se-en-1.0.bps`, the result should be CRC32 2EEB7D2A.
* Swan Revival Edition (Japanese text): `lode-runner-se-ja-1.0.bps`, the result should be CRC32 1425CEDE.
* Color Edition (colorized by Gio): `lode-runner-en-color-0.9.bps`, the result should be CRC32 86208283.
* Swan Revival Color Edition (colorized by Gio): `lode-runner-se-en-color-0.9.bps`, the result should be CRC32 00405449.

The patched ROM is 512 KB, the same size as the original. It's a WonderSwan (mono) game, so keep the .ws extension. The two Color Editions are WonderSwan Color games: give those the .wsc extension.

You must provide your own copy of the original Japanese game to apply it.

**Download:** `lode-runner-en-1.0.bps`, `lode-runner-se-en-1.0.bps`, `lode-runner-se-ja-1.0.bps`, `lode-runner-en-color-0.9.bps` and `lode-runner-se-en-color-0.9.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/lode-runner-v1.0).

**Known issues**

* It hasn't been played start to finish by a person. If you find leftover Japanese or anything broken, please tell me where it happened.
* Bandai's download server closed long ago and its stages are lost. With the standard patch, DOWN LOAD reaches Swan Revival today but finds no stage list there (error 603).
* A few screens were checked only in a test viewer, not in a real session: "Receiving" and some adapter and phone errors.
* The Swan Revival Edition's sharing was tested against a private copy of the planned service, not the live one.
* The Japanese-text edition's new Japanese was written by AI and checked by an AI reviewer, not by a native speaker.
* Color Edition (from Gio's notes): the stage's blocks are recolored a few at a time (a full screen takes about a quarter of a second), so when a stage appears or scrolls, some blocks can show their plain color for a moment. Screens other than the title, the menus, the story pictures and the stages use the menu colors.
* For this project, the Color Edition was checked only at its start: both patches give the CRC32s above, differ from the v1.0 builds only in the color code, its tables and the header's color flag, and were played from the title into the first Story Mode stage. Gio's own testing covered the title, the menus, Story Mode, Select Mode and the stages.

**Technical notes (for the curious)**

* All of the game's Japanese is compressed pictures: tile sets plus screen maps, with no font or text strings. The patch hooks the game's map copy routine, so each translated screen loads its own English tiles next to the original ones.
* The Swan Revival Edition adds about 4.4 KB of code. It reuses the game's own WonderGate routines (connect, send, receive, hang-up, error screens) for a new upload request and a richer stage list. The player's name is kept in EEPROM words the game never uses.
* The Japanese-text edition's new screens use 85 characters cut from the game's own lettering, so they match the original screens.
* The Color Edition (Gio's work) hooks the game's VBlank handler. It switches the WonderSwan Color into color mode and, every frame, turns the game's mono shades and palettes into color palettes through a color table for each kind of screen. On the stages and the title, a table gives each tile its own palette, and a second hook after the sprite list copy does the same for the hero, the guards and the sea creatures. The code and tables sit in space that is free in the Japanese ROM and in both English patches.

**Images** (original on the left, English on the right; 21-27: the Color Edition on the right)

1. Story: Chapter 1, Discovery

   ![Story: Chapter 1, Discovery](images/15-story-chapter-1.png)

2. Story: Chapter 2, Wonder

   ![Story: Chapter 2, Wonder](images/16-story-chapter-2.png)

3. Story: Chapter 3, Mystery

   ![Story: Chapter 3, Mystery](images/17-story-chapter-3.png)

4. Story: Chapter 4, Solitude

   ![Story: Chapter 4, Solitude](images/18-story-chapter-4.png)

5. Story: Chapter 5, Ordeal

   ![Story: Chapter 5, Ordeal](images/19-story-chapter-5.png)

6. Story Mode: putting on the diving suit?

   ![Story Mode: putting on the diving suit?](images/20-diving-suit-prompt.png)

7. Story Mode: New Game or Continue

   ![Story Mode: New Game or Continue](images/21-story-new-or-continue.png)

8. Story Mode: overwrite the save data with autosaves?

   ![Story Mode: overwrite the save data with autosaves?](images/22-story-autosave-prompt.png)

9. Original Map: choosing a map

   ![Original Map: choosing a map](images/23-original-map-choose.png)

10. Original Map: no map data to load

   ![Original Map: no map data to load](images/24-original-map-no-data.png)

11. Map Edit: New Map, Continue or Use a Built-in Map

   ![Map Edit: New Map, Continue or Use a Built-in Map](images/25-map-edit-options.png)

12. Map Edit: choosing a built-in map

   ![Map Edit: choosing a built-in map](images/26-map-edit-builtin.png)

13. Map Edit: choosing the sound for a map

   ![Map Edit: choosing the sound for a map](images/27-map-edit-sound.png)

14. Data I/O: Send Data or Receive Data

   ![Data I/O: Send Data or Receive Data](images/28-data-io-link.png)

15. DOWN LOAD: Connect or Phone Number

   ![DOWN LOAD: Connect or Phone Number](images/29-download-menu.png)

16. DOWN LOAD: connecting

   ![DOWN LOAD: connecting](images/30-download-connecting.png)

17. Phone number keypad: a new number being entered

   ![Phone number keypad: a new number being entered](images/31-keypad-entry.png)

18. Option: viewing the Original Map save data

   ![Option: viewing the Original Map save data](images/32-option-view-data.png)

19. Option: confirm deleting the Story Mode save data

   ![Option: confirm deleting the Story Mode save data](images/33-option-delete-confirm.png)

20. Ending: friends arrive on the beach

   ![Ending: friends arrive on the beach](images/34-ending-surfers.png)

21. Color Edition (colorized by Gio): title screen

   ![Color Edition (colorized by Gio): title screen](images/35-color-title.png)

22. Color Edition (colorized by Gio): main menu

   ![Color Edition (colorized by Gio): main menu](images/36-color-main-menu.png)

23. Color Edition (colorized by Gio): Story Mode

   ![Color Edition (colorized by Gio): Story Mode](images/37-color-story.png)

24. Color Edition (colorized by Gio): a stage, with a guard

   ![Color Edition (colorized by Gio): a stage, with a guard](images/38-color-stage-guard.png)

25. Color Edition (colorized by Gio): putting on the diving suit?

   ![Color Edition (colorized by Gio): putting on the diving suit?](images/39-color-diving-suit-prompt.png)

26. Color Edition (colorized by Gio): a stage in the diving suit

   ![Color Edition (colorized by Gio): a stage in the diving suit](images/40-color-stage.png)

27. Swan Revival Color Edition (colorized by Gio): title screen

   ![Swan Revival Color Edition (colorized by Gio): title screen](images/41-color-swan-revival-title.png)

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
