// Appeler le module "discord.js"
const Discord = require("discord.js")

// Appeler le fichier "loadSlashCommands" du dossier "Loaders"
const loadSlashcommands = require("../Loaders/loadSlashCommands")

module.exports = async bot => {

    // Charge les données des slash commands
    await loadSlashcommands(bot)

    // Afficher que le bot est en ligne dans la console
    console.log(`${bot.user.tag} est en ligne !`)
}