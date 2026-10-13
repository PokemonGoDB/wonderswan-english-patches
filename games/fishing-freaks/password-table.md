# Fishing Freaks: Bass Rise: fish password table

The English patch shows a catch's password (START on a fish in Catch Data) as 20 hex digits, two per symbol.
The original cartridge shows the same 10 bytes as 10 symbols from the table below (ROM 8FC2Ah, 256 Shift-JIS
characters; TEXT-FORMAT.md, "Fish password"). To get the original code, read the hex in pairs and look each
pair up here: `E8 43 1E ...` gives the symbols for E8, 43, 1E and so on.

Nothing in the game reads the password back; what it was used for in 2000 is not known.

| Hex | Symbol | Hex | Symbol | Hex | Symbol | Hex | Symbol |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 00 | 豆 | 40 | へ | 80 | ハ | C0 | 会 |
| 01 | １ | 41 | ほ | 81 | ヒ | C1 | 伍 |
| 02 | ２ | 42 | ま | 82 | フ | C2 | 六 |
| 03 | ３ | 43 | み | 83 | ヘ | C3 | 七 |
| 04 | ４ | 44 | む | 84 | ホ | C4 | 九 |
| 05 | ５ | 45 | め | 85 | マ | C5 | 日 |
| 06 | ６ | 46 | も | 86 | ミ | C6 | 年 |
| 07 | ７ | 47 | や | 87 | ム | C7 | 月 |
| 08 | ８ | 48 | ゆ | 88 | メ | C8 | 白 |
| 09 | ９ | 49 | よ | 89 | モ | C9 | 目 |
| 0A | Ａ | 4A | ら | 8A | ヤ | CA | 半 |
| 0B | Ｂ | 4B | ｄ | 8B | ユ | CB | 反 |
| 0C | Ｃ | 4C | る | 8C | ヨ | CC | 必 |
| 0D | Ｄ | 4D | れ | 8D | ラ | CD | 匹 |
| 0E | Ｅ | 4E | ろ | 8E | ｆ | CE | 分 |
| 0F | Ｆ | 4F | わ | 8F | ル | CF | 平 |
| 10 | Ｇ | 50 | を | 90 | レ | D0 | ㊤ |
| 11 | Ｈ | 51 | ん | 91 | ロ | D1 | ㊥ |
| 12 | ｅ | 52 | が | 92 | ワ | D2 | ㊦ |
| 13 | Ｊ | 53 | ぎ | 93 | ヲ | D3 | ㊧ |
| 14 | Ｋ | 54 | ぐ | 94 | ン | D4 | ㊨ |
| 15 | Ｌ | 55 | げ | 95 | ガ | D5 | ☆ |
| 16 | Ｍ | 56 | ご | 96 | ギ | D6 | ？ |
| 17 | Ｎ | 57 | ざ | 97 | グ | D7 | ￥ |
| 18 | Ｏ | 58 | じ | 98 | ゲ | D8 | ＠ |
| 19 | Ｐ | 59 | ず | 99 | ゴ | D9 | 上 |
| 1A | Ｑ | 5A | ぜ | 9A | ザ | DA | 下 |
| 1B | Ｒ | 5B | ぞ | 9B | ジ | DB | 右 |
| 1C | Ｓ | 5C | だ | 9C | ズ | DC | 左 |
| 1D | Ｔ | 5D | ぢ | 9D | ゼ | DD | 亜 |
| 1E | Ｕ | 5E | づ | 9E | ゾ | DE | 安 |
| 1F | Ｖ | 5F | で | 9F | ダ | DF | 位 |
| 20 | Ｗ | 60 | ど | A0 | ヂ | E0 | 円 |
| 21 | Ｘ | 61 | ば | A1 | ヅ | E1 | 王 |
| 22 | Ｙ | 62 | び | A2 | デ | E2 | 川 |
| 23 | Ｚ | 63 | ぶ | A3 | ド | E3 | 山 |
| 24 | あ | 64 | べ | A4 | バ | E4 | 池 |
| 25 | い | 65 | ぼ | A5 | ビ | E5 | 沼 |
| 26 | う | 66 | ア | A6 | ブ | E6 | 石 |
| 27 | え | 67 | イ | A7 | ベ | E7 | 岩 |
| 28 | お | 68 | ウ | A8 | ボ | E8 | 糸 |
| 29 | か | 69 | エ | A9 | 壱 | E9 | 魚 |
| 2A | き | 6A | オ | AA | 弐 | EA | 水 |
| 2B | く | 6B | カ | AB | ＋ | EB | 火 |
| 2C | け | 6C | キ | AC | － | EC | 色 |
| 2D | こ | 6D | ク | AD | ＝ | ED | 巨 |
| 2E | さ | 6E | ケ | AE | ｈ | EE | 空 |
| 2F | し | 6F | コ | AF | ＃ | EF | 海 |
| 30 | す | 70 | サ | B0 | ＄ | F0 | 花 |
| 31 | せ | 71 | シ | B1 | ％ | F1 | 天 |
| 32 | そ | 72 | ス | B2 | ＆ | F2 | 雨 |
| 33 | た | 73 | セ | B3 | ｒ | F3 | 角 |
| 34 | ち | 74 | ソ | B4 | ＊ | F4 | 木 |
| 35 | つ | 75 | タ | B5 | 参 | F5 | 絵 |
| 36 | て | 76 | チ | B6 | 四 | F6 | 区 |
| 37 | と | 77 | ツ | B7 | ／ | F7 | 元 |
| 38 | な | 78 | テ | B8 | → | F8 | 大 |
| 39 | に | 79 | ト | B9 | ← | F9 | 馬 |
| 3A | ぬ | 7A | ナ | BA | ｍ | FA | 鳥 |
| 3B | ね | 7B | ニ | BB | ｎ | FB | 猫 |
| 3C | の | 7C | ヌ | BC | 父 | FC | 国 |
| 3D | は | 7D | ネ | BD | 母 | FD | 土 |
| 3E | ひ | 7E | ａ | BE | 兄 | FE | 田 |
| 3F | ふ | 7F | ノ | BF | 宇 | FF | 中 |

Unprintable entries are shown as their two bytes in parentheses.
