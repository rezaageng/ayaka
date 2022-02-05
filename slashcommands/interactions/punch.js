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

    for (let index = 0; ; index++) {
      try {
        const gif = await getGiphy("anime punch")
        const attachment = new MessageAttachment(gif, "punch.gif")

        await interaction.deferReply()
        return await interaction.followUp({
          content: `Punching <@${member.id}>`,
          files: [attachment],
        })
      } catch (error) {
        if (index < 5) {
          continue
        } else {
          console.log(error)
        }
      }
    }
  },
}
