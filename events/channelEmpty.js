module.exports = {
  name: "channelEmpty",
  run: async (bot, queue) => {
    if (queue.connection) {
      queue.connection.disconnect()
    }
    queue.metadata.channel.send(
      "Automatically disconnected due to channel empty"
    )
  },
}
