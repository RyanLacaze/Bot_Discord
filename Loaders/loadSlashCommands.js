// Appeler les différents module
const Discord = require("discord.js");
const { name } = require("../Commandes/ping");
const { REST } = require("@discordjs/rest")
const { ROUTES } = require("discord.js")

module.exports = async bot => {

    // Toutes les commandes slash vont se retrouver dans ce tableau
    let commands = [];

    // Différents champs constituant une commande
    bot.commands.forEach(async command => {
        console.log("1",command)
        let slashCommand = new Discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission === "Aucune" ? null: command.permission)

        // effectue l'option si il y en a une
        if (command.option?.length >= 1) {
            for(let i = 0; i < command.option.length; i++) {
                slashCommand[`add${command.option[1].type.slice(0, 1).toUpperCase() + command.option[i].type.slice(1, command.option[i].type.length)}Option`](Option = option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].required))
            }
        }

        // Ajoute des slash commands dans le tableau et retourne la longueur du tableau une fois les nouvelles slash commands ajoutées 
        await commands.push(slashCommand)
    });

    const rest = new REST({version: "10"}).setToken(bot.token)

    await rest.put(Discord.Routes.applicationCommands(bot.user.id), {body: commands})

    // Afficher le message dans la console
    console.log("Les slashs commandes sont créées avec succès !")
}