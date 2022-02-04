module.exports = {
  name: "pause-resume",
  description: "Pause or resume song",
  category: "player",
  permissions: [],
  options: [
    {
      type: "STRING",
      name: "pause-resume",
      description: "What wil you do?",
      choices: [
        { name: "Pause", value: "true" },
        { name: "Resume", value: "false" },
      ],
      required: true,
    },
  ],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)
    const result = interaction.options.getString("pause-resume")
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

    const resultEmbed = client.embed
      .setColor("#32a864")
      .setTitle(rslt ? "Song paused | ⏸️" : "Resume song | ▶️")

    queue.setPaused(rslt)

    return await interaction.reply({ embeds: [resultEmbed] })
  },
}
