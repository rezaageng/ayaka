const { MessageEmbed } = require("discord.js")

const repeatMode = [
  { name: "Off", value: 0 },
  { name: "Repeat One", value: 1 },
  { name: "Repeat All", value: 2 },
  { name: "Autoplay", value: 3 },
]

module.exports = {
  name: "repeat",
  description: "Choose repeat mode",
  category: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      type: "NUMBER",
      name: "mode",
      description: "The song title to search lyrics",
      choices: repeatMode,
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)
    const mode = interaction.options.getNumber("mode")
    const repeatName = repeatMode.find((m) => mode === m.value)?.name

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

    const repeatEmbed = new MessageEmbed()
      .setColor("#32a864")
      .setTitle(
        mode != 0 ? `${repeatName} on | ✅` : `Repeat mode ${repeatName} | ❌`
      )

    queue.setRepeatMode(mode)

    return await interaction.reply({ embeds: [repeatEmbed] })
  },
}
