module.exports = {
  name: "play",
  description: "Play music",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "song",
      description: "song title",
      type: "STRING",
      required: true,
    },
  ],
  run: async ({ client, interaction, args }) => {
    let song = interaction.options.getString("song")

    client.distube.play(BaseGuildVoiceChannel, song)

    return interaction.reply(`playing ${song}`)
  },
}
