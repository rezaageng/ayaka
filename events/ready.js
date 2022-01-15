module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log(`${bot.client.user.tag} is here :D`)
        bot.client.user.setActivity("You ｏ(≧▼≦○〃", { type: "WATCHING" })
    },
}
