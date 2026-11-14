# SD Gundam G Generation: Gather Beat 2 (WonderSwan Color) - AI English translation patch v1.4 (Extras page: stat boosts by Gigan, Stage Select)

**SD Gundam G Generation: Gather Beat 2** (SDガンダム Gジェネレーション ギャザービート2) is Bandai's 2001 G Generation strategy game for the WonderSwan Color, released only in Japan. You command a mixed force of mobile suits and ships from across the Gundam series on grid maps, replaying battles from Mobile Suit Gundam, The 08th MS Team, 0083, Zeta, ZZ, Char's Counterattack, Victory, G Gundam, Gundam Wing, Gundam X, Turn A and more. Pilots fire ID commands (special abilities with their own speech), between stages you manage the Backstage (buying, developing and modifying units, assigning pilots), and the game adds an encyclopedia of characters and mobile suits, adventure scenes, two endings and unit trading over the link cable. This patch translates it into English. (The first Gather Beat has its own patch and release.)

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* All story, map and battle dialogue, ID and battle speech, the adventure scenes, menus and names, the encyclopedia (684 entries), and the narration of both endings.
* Link cable: the Unit Trade screens and messages.
* WonderGate: the shop screens for the post-game downloads of extra units, pilots and scenarios. The downloads work with the Swan Revival service.
* Pictures redrawn in English: the 33 stage title cards, the Backstage panel and its captions, the effect markers (hand-drawn letters), the battle words (CRITICAL!, MISS!, I-FIELD ...), the title menus and copyright, the UNIT TRADE plate and both staff rolls.
* Kept as they are, because the original is already in English: the title logo, PRESS START BUTTON, the Backstage logo, the turn banners, and the NEWS and EYES ONLY signs in the second ending.

**Names and terms**

Characters, mobile suits, ships and places use Bandai's current official English (the English Gundam site): Elpeo Ple, Dark Gundam, Shadow Gundam, Nu Gundam, Turn A Gundam, Confeito, Kailash Geary, Dogosse Giar. Military ranks use the naval set the English anime releases use (Ensign Shiro Amada, Lieutenant Quattro, Commander Char, Captain Bright); sergeants and corporals keep their army titles, and OZ officers use plain ranks (Lieutenant Zechs, Colonel Une). Master Asia's techniques are romanized, as English G Gundam media do. Stage titles use the official English episode titles where they exist. The staff roll follows the romanizations in the first Gather Beat's own English credits where the same people appear. Where a label has no room, it uses a short form (the encyclopedia's series list says "Turn A"; the weapon list says "Def." for Guard).

**How it was made: AI translation, independent checks, human decisions**

* Claude translated everything directly from the Japanese in the ROM and did all the hacking: a variable-width English text renderer, about 17,000 lines moved into new space, recompressed title cards and rebuilt staff rolls.
* A separate, independent Claude reviewer checked the game against the Japanese; its findings were verified and fixed.
* On screen: every translated text box was shown in the game's own dialogue boxes in the emulator with every drawn letter logged (12,583 boxes and 5,911 other lines), random walks through menus and maps were watched for any Japanese reaching the screen and for any English label drawn over a window frame, both endings and staff rolls were played in test ROMs, screens were compared with the Japanese side by side for centring and spacing, real WonderGate sessions were run against the project's own server, and unit trades were made between two emulated consoles (English with English, and English with Japanese).
* The judgement calls (names, ranks, short forms, redrawn pictures, typos in the original art) were listed with the Japanese, a literal reading and the options, and I decided each one by hand over three rounds.

**Extras page (new in v1.4)**

The title's Options row has a fourth item, EXTRAS, with four switches. All are off until you turn them on, and with all of them off the game plays exactly as v1.3. UP and DOWN choose a row, A switches it, B saves and goes back. The switches are kept in the cartridge save, outside the three save slots, so they stay set after power-off and apply to every slot.

* **Stronger Main Pilots:** 57 lead pilots (Amuro, Kamille, Judau, Domon, Heero ...) get close combat and shooting x1.3 and SP x2.
* **Stronger Support Pilots:** 39 supporting pilots (Kai, Hayato, Sayla, Emma, Bright ...) get close combat x2, shooting and agility x1.5, critical rate and SP x2.5.
* **Stronger Mobile Suits:** 51 allied units. Much stronger (about x2 HP, defence, mobility and weapons, some with +1 move): Ez8HAC, Ez8HMC, Alex FA, Capule, G-3 Gundam, GM Juggler, Dijeh, Hyaku Shiki (the MBL form also gains its rifle and saber), Ball Early Proto., Re-GZ, G-Cannon, Rick Dias S, Super Dias. Stronger (about x1.3 to x1.5, or more ammo and accuracy): Turn A Gundam (as excavated), Ez8 Kai, F91, GP03S Stamen and Dendrobium, Sandrock, Deathscythe, Heavyarms, Superior Gundam, Wing Gundam, ZZ Gundam, Full Armor ZZ, Zeta Gundam, Nu Gundam, NT-1 Alex, Gundam, Gundam Mk-II Unit 0, Shining Gundam, Shadow Gundam, Sumo (Gold Type), Taurus (White), Methuss, Rising Gundam, Jegan, Xi Gundam, Nobel Gundam S.
* **Stage Select:** New Game opens the developers' own stage select, which the original leaves unused: UP and DOWN choose an entry (the developers' labels ST00, ST01 ... with route tags), A starts it, B goes on with the normal game. It plays each stage the way the developers' tool sets it up, which is not always the same as reaching the stage in a normal game. Use it for exploring. Until v1.3 this was a separate Stage Select patch.

**Credit:** the three stat switches are **Gigan's "SD Gundam G Generation - Gather Beat 2 Hack" v1.2** (romhacking.net, 13 December 2022). The idea and every value are Gigan's, taken from that release's three patches and checked byte for byte against its combined patch; the Extras page names it too. Our part is making them switches on the English version.

What a switch changes on a game in progress: maximum HP, defence, move, weapon power, pilot stats and maximum SP change at once, for the units and pilots you already have. Current HP is stored in the save, so after switching on a unit shows, for example, 400/800 until the next stage starts. After switching off, the next time a save is loaded the game lowers stored HP, ammo and SP to the normal maximum.

Link-cable Unit Trade works between v1.4 with the switches on and v1.3: a trade sends only which unit it is, and the receiving game gives it its own values.

**Notes on the original**

* The allied turn banner reads FRIENDRY TURN. It is the original's spelling and is kept.
* After the first ending the original shows, in its own English: "The war is not finished. / Try to seek your another future....". That line is the original game's, not this translation's.

**Changelog**

* **v1.4**: one patch with an Extras page on the title's Options row: Gigan's three stat hacks and the stage select as switches, all off by default (with every switch off the game is the same as v1.3). The patched ROM is now 16 MB. SETTINGS on that row is drawn slightly narrower to make room for EXTRAS. The separate Stage Select patch is retired. Saves from v1.3 and from the Japanese version work.
* **v1.3**: fixes a freeze in battle: every battle in which an attack missed stopped after the MISS! word (thanks to the player who reported it, issue #1). The other battle words (CRITICAL!, I-FIELD ...) now end exactly as in the original too. Nothing else changed; saves from v1.2 work.
* **v1.2**: names and labels the original wrote in Latin letters (0080 and 0083 in the encyclopedia's series list, F91, ID in the command menu, the WonderGate keypad, Total EXP) now use the same English font as the text around them instead of the original's taller letters.
* **v1.1**: link-cable Unit Trade checked on two linked consoles; the UNIT TRADE plate redrawn in English (it was still Japanese) and the trade prompt no longer hides "will be" under a unit icon; labels that drew over window frames fixed (the weapon list's "Guard" is now "Def.", the encyclopedia's series list says "Turn A"). Now released separately from the first Gather Beat.
* **v1.0**: first release (together with the first Gather Beat).

**Sources consulted**

* Japanese text: the WonderSwan Color ROM itself.
* Names and terms: Bandai's English Gundam site (en.gundam-official.com), Gundam Wiki and the G Generation wiki; staff romanizations from the first Gather Beat's English credits.
* WonderGate: the Swan Revival project's documentation of the game's downloads.

**Images** (original on the left, English on the right)

1. Title screen

   ![Title screen](images/01-gb2-title.png)

2. A stage title card

   ![A stage title card](images/02-gb2-stage-title-card.png)

3. Story dialogue

   ![Story dialogue](images/03-gb2-dialogue.png)

4. Battle speech

   ![Battle speech](images/04-gb2-battle.png)

5. The Backstage

   ![The Backstage](images/05-gb2-backstage.png)

6. The encyclopedia's index

   ![The encyclopedia's index](images/06-gb2-encyclopedia.png)

7. The WonderGate shop

   ![The WonderGate shop](images/07-gb2-wondergate-shop.png)

8. Link-cable Unit Trade

   ![Link-cable Unit Trade](images/08-gb2-unit-trade.png)

9. Intro caption: U.C. 0079 October, Earth Orbit

   ![Intro caption: U.C. 0079 October, Earth Orbit](images/09-intro-date-caption.png)

10. Dialogue on the map: "Don't give up!"

   ![Dialogue on the map: "Don't give up!"](images/10-dialogue-dont-give-up.png)

11. Special command: Don't Give Up! (Def. Up)

   ![Special command: Don't Give Up! (Def. Up)](images/11-special-command-def-up.png)

12. Unit info: Ball Early Prototype

   ![Unit info: Ball Early Prototype](images/12-unit-info-ball.png)

13. Unit details with weapon list

   ![Unit details with weapon list](images/13-unit-weapons-ball.png)

14. Pilot status page

   ![Pilot status page](images/14-pilot-status.png)

15. Unit info: Shuttle

   ![Unit info: Shuttle](images/15-unit-info-shuttle.png)

16. Terrain info: Space

   ![Terrain info: Space](images/16-terrain-info-space.png)

17. System menu on the map

   ![System menu on the map](images/17-system-menu.png)

18. Save slot list

   ![Save slot list](images/18-save-slots.png)

19. Game saved

   ![Game saved](images/19-game-saved.png)

20. End Turn confirmation

   ![End Turn confirmation](images/20-end-turn-confirm.png)

21. Full map with turn and unit counts

   ![Full map with turn and unit counts](images/21-full-map-turn-count.png)

22. Units list

   ![Units list](images/22-unit-list.png)

23. Options: confirm attack and battle text

   ![Options: confirm attack and battle text](images/23-options.png)

24. Battle: Attack, Fight, Evade, Guard

   ![Battle: Attack, Fight, Evade, Guard](images/24-battle-command-panel.png)

25. Battle: weapon list

   ![Battle: weapon list](images/25-battle-weapon-list.png)

26. The title's Options row, with the new EXTRAS item

   ![The title's Options row, with the new EXTRAS item](images/26-gb2-options-extras.png)

27. The Extras page (v1.4 only: all switches off on the left, on on the right)

   ![The Extras page (v1.4 only: all switches off on the left, on on the right)](images/27-gb2-extras-page.png)

**How to patch**

Apply one of the BPS files to the Japanese ROM "SD Gundam G Generation - Gather Beat 2 (Japan)" (CRC32 4D21A347) in your browser with the [Swan Revival patcher](https://swanrevival.com/patcher/), or with Floating IPS, beat or ROM Patcher JS:

* Standard: `gather-beat-gb2-en-1.4.bps`, the result should be CRC32 B0BB0D1E.
* 8 MB edition (v1.3, no Extras page): `gather-beat-gb2-en-1.3.bps`, the result should be CRC32 2306E8BE.

Keep the .wsc extension. With v1.4 the patched ROM is 16 MB (the original is 8 MB): the game's stat tables are switched by mapping a second copy of part of the game, one per combination of switches. The WonderSwan supports 16 MB cartridges, but v1.4 has so far been tested only in our emulator, not on a console, a flash cartridge or other emulators. If it does not start on your setup, use the 8 MB v1.3, which is the same translation without the Extras page, and please tell me. Saves from the Japanese version and from v1.3 work.

You must provide your own copy of the original Japanese game to apply it.

**Download:** `gather-beat-gb2-en-1.4.bps`, `gather-beat-gb2-en-1.3.bps` on the [release page](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/gather-beat-2-v1.4).

**Known issues**

* The game hasn't been played start to finish by a person. If you find leftover Japanese or anything broken, please tell me where it happened.
* The WonderGate connection-failure screen was not produced in testing; its text is translated (the "not connected" screen was seen in English).
* v1.4's 16 MB ROM has not been tried on real hardware, flash cartridges or emulators other than ours.
* Taking a save back from v1.4 to v1.3 or the Japanese version: first turn the three stat switches off, choose Continue, load the slot and save it again. A save written while a stat switch was on can hold HP above the normal maximum, and v1.3 and the original break in the next enemy attack on such a unit. (v1.4 itself corrects this whenever it loads a save.)
* With Stage Select on (the developers' menu): a stage started from it can show a small red square on the map, a red block at the top of the screen for a few frames in a stage's opening dialogue, and garbage tiles in the intro's first portrait after B; some stages it starts are scripted and give no control.

**Technical notes (for the curious)**

* The game draws text with a fixed-cell Japanese renderer; the patch adds a variable-width English renderer and moves the English into free ROM banks through escape codes, so no Japanese line had to be shortened to fit its old space.
* The encyclopedia's index tabs are a byte in each entry; the patch re-sorts the character and mobile suit tables by English name and regroups them as A-B, C-D ... W-Z (the entry pages and the "seen" records use ids, not positions).
* The stage title cards are LZ-compressed pictures; they were redrawn at twice the dialogue font's size and recompressed. The staff rolls are animation records rewritten in place, because moving them broke the cards.
* The unused stage select ends by jumping back to a context that its removed debug loop used to set up; the patch sets that context at the game's top-level loop when the Stage Select switch is on, so a chosen stage starts cleanly.
* The game reads its unit and pilot tables directly at about 230 places, so the stat switches do not patch those places: the 16 MB ROM holds one copy of the game's top block per combination of the three switches, and one bank register chooses which copy is mapped. The switches live in a part of the cartridge save the game never uses.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
