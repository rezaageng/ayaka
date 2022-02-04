const { MessageAttachment } = require("discord.js")
const { getGiphy } = require("../../util/apiRequest")

module.exports = {
  name: "punch",
  description: "Punch someone",
  category: "player",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "member",
      description: "The person you want to punch",
      type: "USER",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const member = interaction.options.getMember("member")
    const gif = await getGiphy("anime punch")
    const attachment = new MessageAttachment(gif, "punch.gif")

    await interaction.deferReply()
    return await interaction.followUp({
      content: `Punching <@${member.id}>`,
      files: [attachment],
    })
  },
}
