// Appeler le module "discord.js"
const Discord = require("discord.js")


module.exports = {
    
    // Informations de la commandes
	name: "hey",
    description: "renvoie hey!",
    dm: false,

    // Réponse de la commande
	async run(bot, message) {
		await message.reply('hey!');
	},
}