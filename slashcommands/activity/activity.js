module.exports = {
  name: "activity",
  description: "Do activity",
  category: "activity",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "activity",
      description: "Select an activity",
      type: "STRING",
      choices: [
        { name: "YouTube Together", value: "youtube" },
        { name: "Fishington", value: "fishing" },
        { name: "Ocho", value: "ocho" },
        { name: "Sketchheads", value: "sketchheads" },
        { name: "Betrayal", value: "betrayal" },
        { name: "Word Snack", value: "wordsnack" },
        { name: "Letter Tile", value: "lettertile" },
        { name: "Puttparty", value: "puttparty" },
        { name: "Awkword", value: "awkword" },
        { name: "Spellcast", value: "spellcast" },
        { name: "Doodlecrew", value: "doodlecrew" },
        { name: "Chess", value: "chess" },
        { name: "Poker", value: "poker" },
      ],
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const activity = interaction.options.getString("activity")
    const channel = interaction.member.voice.channelId

    if (!interaction.member.voice.channelId)
      return await interaction.reply({
        content: "You are not in a voice channel!",
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

    client.discordTogether
      .createTogetherCode(channel, activity)
      .then(async (invite) => {
        return interaction.reply(`${invite.code}`)
      })
  },
}
