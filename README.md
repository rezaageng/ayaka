# ❄️ Ayaka Bot 🌸

Ayaka Bot is a discord bot that running on node.js

- [Installation](#%E2%9D%84%EF%B8%8F-ayaka-bot-%F0%9F%8C%B8)
- [Play Music](#%F0%9F%8E%B5-play-music)
- [Interactions](#%F0%9F%91%8B-interactions)
- [Activity](#%F0%9F%95%B9%EF%B8%8F-activity)

## 🔧 Installation

**[Node.js](https://nodejs.org/en/) 16.9.0 or newer is required.**

Install all required dependencies

```sh
npm i
```

Rename `.env.example` to `.env` and fill with your own token

- [Discord Developer Portal](https://discord.com/developers/applications)
- [GIPHY Developers](https://developers.giphy.com/dashboard/)

```env
TOKEN=Your discord bot token
GIPHY=Your Giphy API Token
```

Setup [play-dl](https://play-dl.github.io/modules.html) cookie

```sh
node cookie.js
```

Click [here](https://github.com/play-dl/play-dl/tree/main/instructions#youtube-cookies) for more information about [play-dl](https://play-dl.github.io/modules.html) cookie

Run the bot

```sh
npm start
```

## 🎵 Play Music

Commands list:

- /play
- /pause-resume
- /skip
- /queue
- /disconnect
- /jump
- /lyric
- /now-playing
- /remove
- /repeat
- /shuffle
- /stop

## 👋 Interactions

Commands list:

- /blush
- /bonk
- /cry
- /dance
- /hug
- /kick-gif
- /pat
- /punch
- /slap
- /smug
- /wink

## 🕹️ Activity

Command:

- /activity

Free activities:

- YouTube Together
- Sketch Heads (and Doodle Crew)
- Word Snacks
- Betrayal.io
- Fishington.io

Boost lv 1:

- Poker Night
- Chess In The Park
- Checkers In The Park
- Ocho
- Letter League
- SpellCast
