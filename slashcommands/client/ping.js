const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Ping ayaka",
  category: "client",
  permissions: [],
  devOnly: false,
  run: async ({ client, interaction, args }) => {
    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Pong")

      .addField("Latency", `🏓 ${Date.now() - interaction.createdTimestamp}ms`)
      .addField("API Latency", `🔥 ${Math.round(client.ws.ping)}ms`)
      .setTimestamp()

    return interaction.reply({ embeds: [exampleEmbed] })
  },
}
