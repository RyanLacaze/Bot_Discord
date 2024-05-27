// Appeler le module "discord.js"
const Discord = require("discord.js")


module.exports = {

    // Informations de la commande
    name: "ping",
    description: "Indique le ping",

    //Réponse de la commande
    async run(bot, message) {
        await message.reply(`Ping : \`${bot.ws.ping}\``)
    }
}