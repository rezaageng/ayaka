const { MessageEmbed } = require("discord.js")
const { Lyrics } = require("@discord-player/extractor")
const lyricsClient = Lyrics.init()

module.exports = {
  name: "lyric",
  description: "Show lyric",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      type: "STRING",
      name: "search",
      description: "The song title to search lyrics",
      required: false,
    },
    {
      type: "BOOLEAN",
      name: "romanzed",
      description: "Search romanzed lyric",
      required: false,
    },
  ],
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)
    const query =
      interaction.options.getString("search", false) ?? queue?.current?.title
    const romanzed = interaction.options.getBoolean("romanzed")

    if (!query)
      return await interaction.reply({
        content: "You forgot to provide the song name.",
        ephemeral: true,
      })

    await interaction.deferReply()

    const queryFormated = query
      .toLowerCase()
      .replace(
        /\(lyrics|lyric|official music video|official video hd|official video|audio|official|clip officiel|clip|extended|hq\)/g,
        ""
      )

    const result = await lyricsClient.search(
      romanzed ? `${queryFormated} romanzed` : `${queryFormated}`
    )

    if (!result || !result.lyrics)
      return bot.say.errorMessage(
        interaction,
        "No lyrics were found for this song."
      )

    const lyricEmbed = new MessageEmbed()
      .setColor("#34d8eb")
      .setTitle(`${query}`)
      .setDescription(`${result.lyrics.slice(0, 4090)}...`)

    return await interaction.followUp({ embeds: [lyricEmbed] })
  },
}
