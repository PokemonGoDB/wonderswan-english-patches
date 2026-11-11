# beatmania for WonderSwan (WonderSwan) - AI English translation patch for Practice mode v1.0 (all 77 lines of it)

**beatmania for WonderSwan** is Konami's 1999 port of the arcade DJ rhythm game, for the original (monochrome) WonderSwan, released only in Japan. You hold the console sideways and scratch and key your way through club tracks. Almost everything in it is already in English: menus, options, song info, results, name entry, records and the staff roll. The one exception is Practice mode, where DJ KONAMI coaches you in Japanese subtitles through the tutorial and two practice songs, then challenges you to a DJ battle.

This patch translates those 77 subtitle lines into English. Nothing else in the game changes. Let's be honest: this isn't a big one. Konami already did the heavy lifting by writing the rest of the game in English. If Grand Battle was a full set, this is a quick scratch. But if DJ KONAMI has been yelling at you in Japanese since 1999, now you'll know what he was saying.

> **Please read:** this translation was made **with AI** (Claude), as a hobby project. A person (me) made every judgement call and played Practice mode before release, but nobody on the project is a professional translator. I'm sharing it as it is for anyone who wants to play. Please **don't upload it to romhacking sites** (romhacking.net and the like). It may not be up to the standard of a real fan translation and it doesn't belong there.

**What's translated**

* All 77 of DJ KONAMI's lines: the Practice-mode tutorial, both practice songs, and the DJ battle challenge with its three verdicts.
* Kept as written in the original: "DJ KONAMI", lowercase "beatmania", and the capitalised game terms that the menus already use (AMBIENT, FUNK, OPTION, KEYSET, FREE PLAY, START).

DJ KONAMI keeps his attitude: he's a cocky club DJ, so the English is casual and a little rude ("Come back when you're ready.", "Newcomer, you're on a roll.").

**How it was made: AI translation, independent checks, human decisions**

* The subtitles are pictures, not text, so each line was transcribed from the ROM's images and checked on screen.
* Claude translated the lines and redrew each picture with a proportional pixel font. A separate Claude reviewer checked every line against the Japanese, then a polish pass made the lines sound natural.
* Every line was drawn by the game itself in an emulator and compared pixel for pixel with the new picture: 77 lines, none clipped. A random walk through the menus and modes on the English ROM found no Japanese subtitle tiles (the same walk on the original finds them).
* The judgement calls were listed with the Japanese, a literal reading and the options, and I decided each one by hand. They include tone, terms and the font. Then I played Practice mode.

**Changelog**

* **v1.0**: first release. Probably also the last, since there's nothing left to translate.

**Sources consulted**

* Japanese text: the subtitle images in the ROM itself.
* Font: a proportional pixel font drawn for our other WonderSwan patches.

**Images** (original on the left, English on the right)

1. Title screen

   ![Title screen](images/01-title.png)

2. DJ KONAMI introduces himself

   ![DJ KONAMI introduces himself](images/02-practice-intro.png)

3. Tutorial: the keys

   ![Tutorial: the keys](images/03-tutorial.png)

4. Practice song (AMBIENT)

   ![Practice song (AMBIENT)](images/04-practice-song.png)

5. DJ battle: the verdict if you lose

   ![DJ battle: the verdict if you lose](images/05-dj-battle.png)

6. Practice mode: "If you want to be a DJ,"

   ![Practice mode: "If you want to be a DJ,"](images/06-dj-offer.png)

7. Practice mode: "First, how to use the gear."

   ![Practice mode: "First, how to use the gear."](images/07-how-to-use-gear.png)

8. Tutorial: "and the turntable,"

   ![Tutorial: "and the turntable,"](images/08-turntable.png)

9. Tutorial: "Go to the OPTION menu"

   ![Tutorial: "Go to the OPTION menu"](images/09-option-menu.png)

10. Key drill: "Try playing the left key."

   ![Key drill: "Try playing the left key."](images/10-left-key.png)

11. Key drill: "It's Y1, the leftmost button."

   ![Key drill: "It's Y1, the leftmost button."](images/11-y1-button.png)

12. Key drill: "press the matching key,"

   ![Key drill: "press the matching key,"](images/12-matching-key.png)

13. Key drill feedback: "Cool!"

   ![Key drill feedback: "Cool!"](images/13-cool.png)

14. Tutorial: "Now for a combination:"

   ![Tutorial: "Now for a combination:"](images/14-combination.png)

15. Tutorial: "Next up: scratching."

   ![Tutorial: "Next up: scratching."](images/15-scratching.png)

16. Scratch drill: "If you spin it too far,"

   ![Scratch drill: "If you spin it too far,"](images/16-spin-too-far.png)

17. Tutorial: "Finally, a combination:"

   ![Tutorial: "Finally, a combination:"](images/17-keys-and-scratch.png)

18. Tutorial: "That's it for the basics."

   ![Tutorial: "That's it for the basics."](images/18-basics-done.png)

19. Third practice stage: "All right, next step."

   ![Third practice stage: "All right, next step."](images/19-next-step.png)

20. Third practice stage: "This song has no scratching."

   ![Third practice stage: "This song has no scratching."](images/20-no-scratching.png)

21. Third practice stage: "I'll play it first to show you,"

   ![Third practice stage: "I'll play it first to show you,"](images/21-ill-play-first.png)

22. Third practice stage: "you can press START"

   ![Third practice stage: "you can press START"](images/22-press-start.png)

23. After the demo: "Too bad."

   ![After the demo: "Too bad."](images/23-too-bad.png)

24. After the demo: "in FREE PLAY too,"

   ![After the demo: "in FREE PLAY too,"](images/24-free-play.png)

25. After the demo: "so practice it there as well."

   ![After the demo: "so practice it there as well."](images/25-practice-there.png)

**How to patch**

Apply the BPS to the Japanese ROM "Beatmania for WonderSwan (Japan)" (CRC32 324622C9) in your browser with the [Swan Revival patcher](https://swanrevival.com/patcher/), or with Floating IPS, beat or ROM Patcher JS. The result should be CRC32 513EE998. The ROM keeps its size (16 MB), so it runs on the same flash carts as the original. It's a WonderSwan (mono) game, so keep the .ws extension.

You must provide your own copy of the original Japanese game to apply it.

**Download:** [`beatmania-en-1.0.bps`](https://github.com/PokemonGoDB/wonderswan-english-patches/releases/tag/beatmania-v1.0) on its release page.

**Known issues**

* The DJ battle comes before the special song, which seems to unlock at stage 5 or later once all ten songs are cleared. Its lines were checked in English on screen, but nobody has reached it in normal play yet. If you have a save that gets there, tell me how it looks.
* Each subtitle stays on screen for about 1.3 to 2 seconds, timed to the music as in the original. English lines are longer than the Japanese, so a few go by quickly. DJ KONAMI doesn't wait for anyone.

**Technical notes (for the curious)**

* Each subtitle is a 128×16 bitmap in a fixed 512-byte slot. The patch redraws each picture in place, so no code, pointers or memory use change. The whole patch is about 29 KB, for a 16 MB game.

**A Note On My Justifications for AI Use**

I have been an avid fan of the Wonderswan system for a very long time now. It was actually a motivating factor for my various attempts to learn Japanese (which have all failed so far). I always wanted to explore the game catalog more, but the lack of English translations made it extremely difficult to do so. Here's the thing: There's a reason many of these games have not been translated yet. It's not just the fact that Japanese > English translation is difficult. There's also the fact that the original developers used all kinds of tricks and technical feats to make these games work. Most games do not have a searchable directory of text that you can just replace with English equivalents. While some are easier than others, translations for some of these would take not only an expert in Japanese > English translation, but also someone with vast game development and programming experience.

I say all that to say: I get why people are apprehensive about AI usage for this type of thing. However, these games have been around for a very long time now and most of them have still not received a translation. I (and others) have chosen to spend our time and money to utilize AI to translate the games and actually make them playable for the wider community. If you don't agree with that, that's completely fine. I am more than happy to remove any of my translations if better, human ran translations are released at a later date. We already decided to skip any games where someone is actively working on a manual translation. While nowhere near what a manual translation effort would be, I do spend a considerable amount of time trying to work through each game's translation. I stress over small details and try my best to make the right calls. And I've probably messed some stuff up, which is why I welcome feedback.

I'm just looking forward to digging through all of these games. It's a great time to be into Wonderswan games.
