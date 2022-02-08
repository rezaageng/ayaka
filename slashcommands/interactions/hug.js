const { MessageAttachment } = require("discord.js")
const { getWaifu } = require("../../util/apiRequest")

module.exports = {
  name: "hug",
  description: "Hug someone",
  category: "interactions",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "member",
      description: "The person you want to hug",
      type: "USER",
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const member = interaction.options.getMember("member")
    const gif = await getWaifu("hug")

    console.log(gif)

    const attachment = new MessageAttachment(gif, "hug.gif")
    await interaction.deferReply()
    return await interaction.followUp({
      content: `Hug <@${member.id}>`,
      files: [attachment],
    })
  },
}
