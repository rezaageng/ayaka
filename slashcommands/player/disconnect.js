module.exports = {
  name: "disconnect",
  description: "Please dont disconnect me :(",
  category: "player",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)

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

    if (!queue.connection) {
      return await interaction.reply({
        content: "Im not in voice channel!",
        ephemeral: true,
      })
    }

    queue.connection.disconnect()
    queue.destroy()

    return await interaction.reply("Disconnected from voice channel!")
  },
}
