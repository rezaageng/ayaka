const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "disconnect",
  description: "Skip song",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)
    const track = queue.tracks[0]

    if (
      interaction.guild.me.voice.channelId &&
      interaction.member.voice.channelId !==
        interaction.guild.me.voice.channelId
    )
      return await interaction.reply({
        content: "You are not in my voice channel!",
        ephemeral: true,
      })

    const disconnect = new MessageEmbed()
      .setColor("#ff1100")
      .setTitle(`**${client.user.tag}** disconnected`)

    queue.destroy()

    return interaction.reply({ embeds: [disconnect] })
  },
}
