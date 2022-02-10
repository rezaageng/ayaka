module.exports = {
  name: "activity",
  description: "Do activity",
  category: "interactions",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "channel",
      description: "Select a voice channel",
      type: "CHANNEL",
      required: true,
    },
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
      ],
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const channel = interaction.options.getChannel("channel")
    const activity = interaction.options.getString("activity")
    if (channel.type !== "GUILD_VOICE")
      return interaction.reply("This is not a voice channel.")

    client.discordTogether
      .createTogetherCode(channel.id, activity)
      .then(async (invite) => {
        return interaction.reply(`${invite.code}`)
      })
  },
}
