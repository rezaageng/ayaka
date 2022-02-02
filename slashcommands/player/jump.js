module.exports = {
  name: "jump",
  description: "Jump to specific song",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "index",
      description: "The song index to jump",
      type: "NUMBER",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)
    let index = await interaction.options.getNumber("index", true)

    if (!queue)
      return await interaction.reply({
        content: "Queue not found!",
        ephemeral: true,
      })

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

    index = index - 1

    if (index < 0 || index > queue.tracks.length || !queue.tracks[index])
      return await interaction.reply({
        content: "Provided Song Index does not exist.",
        ephemeral: true,
      })

    queue.skipTo(index)

    return await interaction.reply(`Jump to **${queue.tracks[0].title}**`)
  },
}
