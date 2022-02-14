module.exports = {
  name: "first-rabbit",
  description: "you cant use this command",
  category: "client",
  permissions: [],
  devOnly: true,
  options: [
    {
      name: "member",
      description: "??",
      type: "USER",
      required: true,
    },
    {
      name: "message",
      description: "?????",
      type: "STRING",
      required: true,
    },
  ],
  run: async ({ client, owners, interaction }) => {
    const member = interaction.options.getMember("member")
    const message = interaction.options.getString("message")

    if (member.user.bot)
      return await interaction.reply("Can't send message to bot!")

    if (owners !== interaction.member.id)
      return await interaction.reply({
        content: `Sorry, only <@${owners}> can use this command!`,
        ephemeral: true,
      })

    member.send(message)

    return await interaction.reply(`To: ${member} msg: ${message}`)
  },
}
