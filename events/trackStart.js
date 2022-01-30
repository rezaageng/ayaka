module.exports = {
  name: "trackStart",
  run: async (bot, queue, track) => {
    queue.metadata.channel.send(`🎶 | Now playing **${track.title}**!`)
  },
}
