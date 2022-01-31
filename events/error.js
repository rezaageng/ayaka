module.exports = {
  name: "error",
  run: async (bot, queue, error) => {
    queue.metadata.channel.send("An error occurred while playing.")
  },
}
