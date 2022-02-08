const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "cry",
  description: "Crying",
  category: "interactions",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const member = interaction.user.id
    const gif = await getWaifu("cry")

    const attachment = new MessageAttachment(gif, "cry.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `<@${member}> crying`,
      files: [attachment],
    })
  },
}
