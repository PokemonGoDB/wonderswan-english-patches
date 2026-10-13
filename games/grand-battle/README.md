# One Piece: Grand Battle Swan Colosseum (WonderSwan Color) - AI English translation patch v1.2

**From TV Animation One Piece: Grand Battle Swan Colosseum** is Bandai and Dimps' 2002 fighting game for the WonderSwan Color, released only in Japan. It covers the story up to the Alabasta saga: Twin Capes, Whisky Peak, Little Garden, Drum Island, then Alabasta. In Event Battle each of the 13 fighters takes on seven opponents across seven stages, with a short exchange before every fight. Most of them replay a moment from the series, and a few are "what if" match-ups that never happened in canon. Along the way there's a Kung-fu Dugong bonus round, a final showdown with Crocodile in the underground temple, and 60 wanted posters to collect, each with its own effect.

This patch translates it into English.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person made every judgement call and played the build before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It isn't up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* All the game's text: every Event Battle scene, all 13 endings, the battle call-outs, the wanted posters and their effects, and the Luffy vs Crocodile finale.
* Graphics: the title menu, banners, buttons, settings, the Continue screen, the poster screen, the character name tags on select and VS screens, stage names, the Stage Select banner, the Mini-Game result and ranking lines, the link-cable message and the copyright screen. All of them are redrawn in English in the original's colours and layout.
* Wanted posters: Mihawk's heading 世界最強剣士 now reads "Greatest Swordsman". Nine posters whose artwork printed Bandai's 2002 spellings (PERU, COSA, CENTAURUS...) now show the official names (PELL, KOZA, KENTAUROS...), redrawn from the posters' own lettering.
* Left as in the original: the title logo stays Japanese, and 絶対正義 ("Absolute Justice") on the Marines' posters is kept because it's part of the artwork.

Names follow the VIZ English manga: Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony Tony Chopper, Tashigi, Smoker, Mr. 2 Bon Clay, Miss All Sunday, Sir Crocodile, Portgas D. Ace and Mr. 1 (Daz Bonez). Places: Twin Capes, Whisky Peak, Little Garden, Drum Castle, Nanohana Harbor, Sandora River, Rainbase, Alubarna. Bon Clay keeps his voice: "okama" and Okama Kenpo as in the manga, "moi" for あちし, and "Don't be ridicu-loooous!!".

**How it was made: AI translation, independent checks, human decisions**

* Claude translated the script directly from the Japanese text in the ROM, and did all the hacking (text engine, font, graphics).
* A second, independent Claude reviewer checked all 292 messages against the Japanese and corrected 17. A polish pass followed, and a separate verifier checked every proposed change against the Japanese: 41 of 42 accepted.
* Every message was rendered in an emulator with every glyph logged: 292 messages, 718 pages, no overflow and no leftover Japanese. All 13 Event Battle routes were played to their endings by script without any Japanese reaching the message box.
* A final pass reread every message against the Japanese, played Grand Battle mode (Single and Tag), paged through all 60 wanted posters, and watched the staff roll.
* The judgement calls were listed with the Japanese, a literal reading and the options, and I decided each one by hand. They include names and epithets, Bon Clay's speech, a few departures from the literal text, and which graphics to keep. Then I played it.

**Changelog**

* **v1.2**: first public release. Compared with the earlier private builds, it adds Mihawk's poster heading in English, the official names on nine posters (both found by the final pass), and a better line break in one dialogue line.

**Sources consulted**

* Japanese text: the WonderSwan Color ROM itself.
* Names, techniques and places: the VIZ Media English manga. One exception by choice: Lucky Roux, the anime spelling.
* Fonts: hand-drawn pixel fonts made for this patch; banner lettering in Avenir Next Condensed Demi.

**How to patch**

Apply the BPS to the Japanese ROM "From TV Animation One Piece - Grand Battle Swan Colosseum (Japan)" (CRC32 F8A1DD2B) with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 A10DA837. The ROM keeps its size (8 MB), so it runs anywhere the original does. Keep the .wsc extension.

You must provide your own copy of the original Japanese game to apply it.

**Download:** [`grand-battle-en-1.2.bps`](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/grand-battle-v1.2) on its release page.

**Known issues**

* Link-cable features (poster trading and 1P vs 2P) couldn't be tested here. Their messages are translated but haven't been seen on two consoles.
* The title logo is still the Japanese one, on purpose.
* If you find leftover Japanese, cut text or a crash, tell me where it happened.

**Technical notes (for the curious)**

* New proportional font (8-pixel capitals with a drop shadow), drawn at any pixel offset inside the game's 16x16 text cells by a small hook in its glyph routine. About 35 characters fit on a line.
* The English script lives in a bank that was empty in the original. Each Japanese message now starts with an 8-byte jump to its English version, so every existing pointer still works.
* The ROM doesn't grow: all new text and code sit in space that was blank (FFh) in the original.
* The developers left some unused scenes in the game: a ROM version screen ("ROM Ver. 0.031 02/05/27"), a character and palette viewer, a link-cable test and two debug battles. They're already in English and no menu reaches them, so the patch leaves them alone.

Translation and hacking: made with AI (Claude), with every judgement call decided by hand. Please don't upload it to romhacking sites. Feedback and bug reports are very welcome!
