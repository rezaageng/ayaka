const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "bonk",
  description: "Bonk someone",
  category: "interactions",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "member",
      description: "The person you want to bonk",
      type: "USER",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const member = interaction.options.getMember("member")
    const gif = await getWaifu("bonk")

    const attachment = new MessageAttachment(gif, "bonk.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `Bonk <@${member.id}>`,
      files: [attachment],
    })
  },
}
