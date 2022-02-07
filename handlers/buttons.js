const { getFiles } = require("../util/functions")
const fs = require("fs")

module.exports = (bot, reload) => {
  const { client } = bot

  fs.readdirSync("./buttons/").forEach((category) => {
    let buttons = getFiles(`./buttons/${category}`, ".js")

    if (buttons.length === 0) {
      console.log("No buttons loaded :(")
    }

    buttons.forEach((f) => {
      if (reload) {
        delete require.cache[require.resolve(`../buttons/${category}/${f}`)]
      }

      const button = require(`../buttons/${category}/${f}`)
      client.buttons.set(button.name, button)
    })
  })
}
