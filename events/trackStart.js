module.exports = {
  name: "trackStart",
  run: async (bot, queue, track) => {
    const nowPlaying = client.embed
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

    queue.metadata.channel.send({ embeds: [nowPlaying] })
  },
}
