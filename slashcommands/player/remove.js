module.exports = {
  name: "remove",
  description: "Remove song",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "index",
      description: "The song index to remove",
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

    if (queue.tracks.length < 1)
      return await interaction.reply({
        content: "There's no song to remove in the queue.",
        ephemeral: true,
      })

    index = index - 1

    if (index < 0 || index > queue.tracks.length || !queue.tracks[index])
      return await interaction.reply({
        content: "Provided Song Index does not exist.",
        ephemeral: true,
      })

    queue.remove(index)

    return await interaction.reply(`**Removed track ${index + 1}**`)
  },
}
