const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "cringe",
  description: "Cringe",
  category: "interactions",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction }) => {
    const member = interaction.user.id
    const gif = await getWaifu("cringe")

    const attachment = new MessageAttachment(gif, "cringe.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `<@${member}> cringe`,
      files: [attachment],
    })
  },
}
