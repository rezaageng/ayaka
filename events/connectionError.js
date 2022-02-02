module.exports = {
  name: "connectionError",
  run: async (bot, queue, error) => {
    queue.metadata.channel.send("Connection Error")
    console.error(error)
  },
}
