# Ayaka Bot

Ayaka Bot is a simple discord bot that running on node.js

Things that Ayaka can do :

- Play Music
- Punch Someone

## Installation

**Node.js 16.9.0 or newer is required.**

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
