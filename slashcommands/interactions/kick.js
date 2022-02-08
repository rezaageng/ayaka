const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "kick-gif",
  description: "Kick someone",
  category: "interactions",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "member",
      description: "The person you want to kick",
      type: "USER",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const member = interaction.options.getMember("member")
    const gif = await getWaifu("kick")

    const attachment = new MessageAttachment(gif, "kick.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `Kick <@${member.id}>`,
      files: [attachment],
    })
  },
}
