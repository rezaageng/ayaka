const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "pat",
  description: "Pat someone",
  category: "interactions",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "member",
      description: "The person you want to pat",
      type: "USER",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const member = interaction.options.getMember("member")
    const gif = await getWaifu("pat")

    const attachment = new MessageAttachment(gif, "pat.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `Pat <@${member.id}>`,
      files: [attachment],
    })
  },
}
