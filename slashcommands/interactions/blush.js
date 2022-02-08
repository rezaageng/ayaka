const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "blush",
  description: "Blush",
  category: "interactions",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const member = interaction.user.id
    const gif = await getWaifu("blush")

    const attachment = new MessageAttachment(gif, "blush.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `<@${member}> blush`,
      files: [attachment],
    })
  },
}
