module.exports = {
  name: "skip",
  description: "Skip song",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)

    if (!queue)
      return await interaction.reply({
        content: "Queue not found!",
        ephemeral: true,
      })

    const previousTrack = queue.previousTracks[queue.previousTracks.length - 1]

    if (
      interaction.guild.me.voice.channelId &&
      interaction.member.voice.channelId !==
        interaction.guild.me.voice.channelId
    )
      return await interaction.reply({
        content: "You are not in my voice channel!",
        ephemeral: true,
      })

    if (queue.tracks.length < 1 && queue.repeatMode !== 3)
      return await interaction.reply({
        content: "No more songs in the queue to skip.",
        ephemeral: false,
      })

    queue.skip()

    return await interaction.reply(
      `**${previousTrack.title}** skipped by <@${interaction.user.id}>`
    )
  },
}
