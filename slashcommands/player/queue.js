const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "queue",
  description: "Show songs queue",
  cattegory: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "page",
      description: "The page number of the queue",
      type: "NUMBER",
      required: false,
    },
  ],
  run: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild.id)

    let page = (await interaction.options.getNumber("page", false)) ?? 1

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

    const multiple = 10

    const maxPages = Math.ceil(queue.tracks.length / multiple)

    if (page < 1 || page > maxPages) page = 1

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

    return interaction.reply({ embeds: [queueEmbed] })
  },
}
