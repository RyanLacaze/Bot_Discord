// Appeler le module "fs"
const fs = require("fs")

module.exports = async bot => {

    // Filtre pour lire seulement les fichier javascript
    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {

        // Evènement pour reconnître les slash command, seulement les fichiers javascript
        let event = require(`../Events/${file}`)
        bot.on(file.split(".js").join(""), event.bind(null, bot))
        console.log(`Evènement ${file} chargé avec succès !`)
    })
}