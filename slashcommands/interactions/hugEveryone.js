const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "hug-everyone",
  description: "Hug everyone (dev only)",
  category: "interactions",
  permissions: [],
  devOnly: true,
  run: async ({ client, owners, interaction }) => {
    const gif = await getWaifu("hug")

    if (owners !== interaction.member.id)
      return await interaction.reply({
        content: `Sorry, i can't do that without <@${owners}> permission!`,
        ephemeral: true,
      })

    const attachment = new MessageAttachment(gif, "hug.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `Hug @everyone`,
      files: [attachment],
    })
  },
}
