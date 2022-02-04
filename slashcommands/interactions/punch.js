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
    const member = interaction.options.getMember("user")
    const gif = getGiphy("anime punch")
    const punchEmbed = client.embed
      .setColor("#32a864")
      .setDescription(`punching`)

    console.log(member)

    return await interaction.reply({ embeds: [punchEmbed] })
  },
}
