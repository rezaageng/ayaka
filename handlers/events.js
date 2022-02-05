const { getFiles } = require("../util/functions")

module.exports = (bot, reload) => {
  const { client } = bot

  let events = getFiles("./events/", ".js")

  if (events.length === 0) {
    console.log("no event to load")
  }

  events.forEach((f, i) => {
    if (reload) {
      delete require.cache[require.resolve(`../events/${f}`)]
    }
    const event = require(`../events/${f}`)
    client.events.set(event.name, event)

    if (!reload) {
      console.log(`${i + 1}. ${f} loaded`)
    }
  })

  if (!reload) {
    initEvents(bot)
  }
}

function triggerEventHandler(bot, event, ...args) {
  const { client } = bot

  try {
    if (client.events.has(event)) {
      client.events.get(event).run(bot, ...args)
    } else {
      throw new Error(`Event ${event} doesn't exist`)
    }
  } catch (err) {
    console.log(err)
  }
}

function initEvents(bot) {
  const { client } = bot

  client.on("ready", () => {
    triggerEventHandler(bot, "ready")
  })

  client.on("messageCreate", (message) => {
    triggerEventHandler(bot, "messageCreate", message)
  })

  client.on("guildMemberAdd", (member) => {
    triggerEventHandler(bot, "welcomeMessage", member)
  })

  client.on("interactionCreate", (interaction) => {
    triggerEventHandler(bot, "interactionCreate", interaction)
  })

  client.player.on("trackStart", (queue, track) => {
    triggerEventHandler(bot, "trackStart", queue, track)
  })

  client.player.on("error", (queue, error) => {
    triggerEventHandler(bot, "error", queue, error)
  })

  client.player.on("connectionError", (queue, error) => {
    triggerEventHandler(bot, "connectionError", queue, error)
  })

  client.player.on("channelEmpty", (queue) => {
    triggerEventHandler(bot, "channelEmpty", queue)
  })
}
