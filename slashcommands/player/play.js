module.exports = {
  name: "play",
  description: "Play song",
  category: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "song",
      type: "STRING",
      description: "The song you want to play",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
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

    const query = interaction.options.get("song").value
    const guildQueue = client.player.getQueue(interaction.guild.id)

    await interaction.deferReply()
    let result = await client.player
      .search(query, { requestedBy: interaction.user })
      .catch(() => {})
    if (!result || !result.tracks.length)
      return await interaction.followUp({
        content: `Track **${query}** not found!`,
      })

    let queue
    if (guildQueue) {
      queue = guildQueue
      queue.metadata = interaction
    } else {
      queue = await client.player.createQueue(interaction.guild, {
        metadata: interaction,
        leaveOnEnd: false,
        leaveOnStop: true,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 60000,
        spotifyBridge: true,
        async onBeforeCreateStream(track, source, _queue) {
          if (track.url.includes("spotify")) {
            const convert = await client.playdl.search(track.title)
            return (
              await client.playdl.stream(convert[0].url, {
                discordPlayerCompatibility: true,
              })
            ).stream
          }
          if (source === "youtube") {
            return (
              await client.playdl.stream(track.url, {
                discordPlayerCompatibility: true,
              })
            ).stream
          }
        },
      })
    }

    try {
      if (!queue.connection)
        await queue.connect(interaction.member.voice.channel)
    } catch (error) {
      queue.destroy()
      return await interaction.followUp({
        content: "Could not join your voice channel!",
        ephemeral: true,
      })
    }
    try {
      result.playlist
        ? queue.addTracks(result.tracks)
        : queue.addTrack(result.tracks[0])

      if (!queue.playing) await queue.play()

      return await interaction.followUp({
        content: `Loading track **${result.tracks[0].title}**!`,
      })
    } catch (error) {
      return await interaction.followUp({
        content: `Something wrong with me!`,
      })
    }
  },
}
