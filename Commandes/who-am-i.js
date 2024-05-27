// Appeler le module "discord.js"
const Discord = require("discord.js")

module.exports = {
	name: "who-am-i",
    description: "renvoie les informations utilisateurs ainsi que l'id du serveur",
    dm: false,

	async run(bot, message, interaction) {
        await interaction.reply(`Your Information: \n Name:  ${user.username}\n ID:  ${user.id}\n Avatar:  ${avatarURL}\n Server ID: ${guild.id}`);
    }
}