module.exports = {
  name: "error",
  run: async (bot, queue, error) => {
    if (queue.destroyed) return

    queue.metadata.channel.send("An error occurred while playing.")
    console.error(error)
  },
}
