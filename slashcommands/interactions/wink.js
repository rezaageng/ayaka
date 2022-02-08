const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "wink",
  description: "Wink",
  category: "interactions",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const member = interaction.user.id
    const gif = await getWaifu("wink")

    const attachment = new MessageAttachment(gif, "wink.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `<@${member}> wink`,
      files: [attachment],
    })
  },
}
