const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "dance",
  description: "Dancing",
  category: "interactions",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const member = interaction.user.id
    const gif = await getWaifu("dance")

    const attachment = new MessageAttachment(gif, "dance.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `<@${member}> dancing`,
      files: [attachment],
    })
  },
}
