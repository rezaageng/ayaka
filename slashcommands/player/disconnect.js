module.exports = {
  name: "disconnect",
  description: "Skip song",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)

    if (
      interaction.guild.me.voice.channelId &&
      interaction.member.voice.channelId !==
        interaction.guild.me.voice.channelId
    )
      return await interaction.reply({
        content: "You are not in my voice channel!",
        ephemeral: true,
      })

    queue.destroy()

    return interaction.reply(`${client.user.tag} disconnected`)
  },
}
