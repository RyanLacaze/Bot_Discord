/*  discord.js est un puissant module Node.js qui vous permet d'interagir très facilement avec l'API Discord.
    Il adopte une approche beaucoup plus orientée objet que la plupart des autres bibliothèques JS Discord,
    ce qui rend le code de votre bot beaucoup plus clair et plus facile à comprendre
*/

/*  un module est un fichier JS qui va exporter certains de ses éléments : 
    fonctions, objets, variables, etc grace à export et import
*/

// Appeler le module "discord.js"
const Discord = require("discord.js")

// Variable intents qui prend toutes les instances discord
const intents = new Discord.IntentsBitField(3276799)

// variable bot prenant en compte toutes les instances de la variable "intents"
const bot = new Discord.Client({intents})

// Appeler le fichier "loadCommands" dans le dossier "Loaders"
const loadCommands = require("./Loaders/loadCommands")


// Appeler le fichier "loadSlashCommands" dans le dossier "Loaders"
const loadSlashCommands = require("./Loaders/loadSlashCommands")

// Appeler le fichier "loadEvents" dans le dossier "Loaders"
const loadEvents = require("./Loaders/loadEvents")

// Appeler le fichier "config.js"
const config = require("./config")

// Garder les données des commandes
bot.commands = new Discord.Collection()

// Connexion du bot grâce au token de celui-ci
bot.login(config.token);

// Charge les données des commandes
loadCommands(bot)

// Charge les données pour reconnaître les commandes
loadEvents(bot)