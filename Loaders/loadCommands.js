// Appeler le module "fs"
const fs = require("fs")

module.exports =  async bot => {

    // Lire le nom des fichiers finissant par js 
    fs.readdirSync("./Commandes").filter(f => f.endsWith("js")).forEach(async file => {

        // Appeler chaques fichiers du dossier "Commandes"
        let command = require(`../Commandes/${file}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`La Commande ${file.slice(0, file.length - 3)} n'a pas de nom !`)
        bot.commands.set(command.name, command)

        // Afficher que les slash commands sont chargées avec succès dans la console
        console.log(`Commande ${file} chargée avec succès !`)
    })
}