module.exports = {
  name: "hi",
  description: "Greet ayaka",
  category: "client",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction, args }) =>
    interaction.reply("hii :heart:"),
}
