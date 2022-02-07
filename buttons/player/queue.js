const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
  name: "queue",
  category: "player",
  run: async ({ client, interaction, params }) => {
    const action = params[0]
    const queue = client.player.getQueue(interaction.guild.id)
    let page = params[1] ?? 1

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

    if (!queue.tracks.length)
      return await interaction.reply({
        content: "There is currently no song in the queue.",
        ephemeral: true,
      })

    if (action === "next") page++
    if (action === "previous") page--

    const multiple = 10

    const maxPages = Math.ceil(queue.tracks.length / multiple)

    if (page > maxPages) page = 1
    if (page < 1) page = maxPages

    const end = page * multiple
    const start = end - multiple
    const tracks = queue.tracks.slice(start, end)

    const queueEmbed = new MessageEmbed()
      .setColor("#32a864")
      .setTitle("Queue")
      .setDescription(
        `${tracks
          .map(
            (song, i) =>
              `**${start + ++i} - [${song.title}](${
                song.url
              })** By ${song.requestedBy.toString()}`
          )
          .join("\n")}`
      )
      .setFooter(
        `Page ${page} of ${maxPages} | song ${start + 1} to ${
          end > queue.tracks.length ? `${queue.tracks.length}` : `${end}`
        } of ${queue.tracks.length}`
      )

    const queueButton = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId(`queue-previous-${page}`)
        .setLabel("Previous")
        .setStyle("SECONDARY"),

      new MessageButton()
        .setCustomId(`queue-next-${page}`)
        .setLabel("Next")
        .setStyle("PRIMARY")
    )

    return await interaction.update({
      embeds: [queueEmbed],
      components: [queueButton],
    })
  },
}
