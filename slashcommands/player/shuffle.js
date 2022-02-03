const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "shuffle",
  description: "Shuffle queue",
  category: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      type: "STRING",
      name: "shuffle",
      description: "What will you do?",
      choices: [
        { name: "On", value: "true" },
        { name: "Off", value: "false" },
      ],
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)
    const result = interaction.options.getString("shuffle")
    const rslt = result === "true" ? true : false

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
        content: "No more songs in the queue to shuffle.",
        ephemeral: false,
      })

    const shuffleEmbed = new MessageEmbed()
      .setColor("#32a864")
      .setTitle(rslt ? "Shuffle on | 🔀" : "Shuffle off | ❌")

    queue.shuffle(rslt)

    return await interaction.reply({ embeds: [shuffleEmbed] })
  },
}
