const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "smug",
  description: "Smug",
  category: "interactions",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const member = interaction.user.id
    const gif = await getWaifu("smug")

    const attachment = new MessageAttachment(gif, "smug.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `<@${member}> smug`,
      files: [attachment],
    })
  },
}
