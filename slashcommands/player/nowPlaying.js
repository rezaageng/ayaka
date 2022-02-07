const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "now-playing",
  description: "Show current song",
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

    const track = queue.nowPlaying()
    const nowPlayingEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(track.title)
      .setURL(track.url)
      .setAuthor({
        name: `${track.requestedBy.username}#${track.requestedBy.discriminator}`,
        iconURL: `https://cdn.discordapp.com/avatars/${track.requestedBy.id}/${track.requestedBy.avatar}.webp`,
      })
      .setThumbnail(track.thumbnail)
      .addFields(
        { name: "Duration", value: track.duration, inline: true },
        { name: "Author", value: track.author, inline: true }
      )

    return await interaction.reply({ embeds: [nowPlayingEmbed] })
  },
}
