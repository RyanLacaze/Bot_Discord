# Bot_Discord
Bot Discord permettant des slash commandes personnalisées !

Avant de créer le bot Dicord, je vais représenter la base de données que j'utiliserai sous fome de schéma (MCD, MLD, MPD).

1- MCD
(![MCD bot dicord](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/3a81db2f-0d69-4735-8be0-c8461a218755)

2- MLD
![alt text](https://imagizer.imageshack.com/v2/1536x286q90/r/924/QJAq4Z.png)

3- MPD
![alt text](https://imagizer.imageshack.com/v2/1536x308q90/r/924/SEYnCZ.png)

Ensuite, je peux passer à la programmation du bot Discord.

Tout d'abord, le fichier "config.js" contient le token du bot discord, il faut savoir que chaque bot discord possède son propre token, n'allez pas recopier celui de mon code.
![alt text](https://imagizer.imageshack.com/v2/991x106q70/r/924/eKjGjF.png)

Toutes les slash commands seront dans le dossier "Commandes".

Par exemple, une commande qui me renvoie "hey" quand la commande "/hey" est réalisée
![alt text](https://imagizer.imageshack.com/v2/375x397q90/r/923/iwDPfi.png)

Le fichier "loadSlashCommands.js" ajoute chaque slash command dans une liste, il défini les différents champs les composants(ex: nom, description, etc...),
la manière de lire les slash commands, puis il les ajoutent dans la liste.

Le fichier "loadCommands.js" lit uniquement le nom des fichiers finissant par js, ensuite il appelle chaque fichier de dossier "Commandes" et enfin,
il affiche dans la console si les slash commands ont été chargées avec succès lors de l'éxécution du programme.

Le fichier "ready.js" appelle le fichier "loadSlashCommands.js" du dossier "Loaders" et charge les données du fichier. Ensuite, simplement à titre indiquatif,
il affichera que le bot est en ligne dans la console.

Le fichier "interactionCreate.js" sera chargé d'exécuter les slash commands par rapport à leur nom.

Le fichier main prendra en compte toutes les instances de Discord pour le bon fonctionnement du bot et se contentera d'appeler les différentes méthodes voulues.
