# Bot_Discord
Bot Discord permettant des slash commandes personnalisées !

![alt text](https://imageshack.com/i/pmD7idzop)



Le fichier "config.js" contient le token du bot discord, il faut savoir que chaque bot discord possède son propre token, n'allez pas recopier celui de mon code.

Toutes les slash commands seront dans le dossier "Commandes".

Le fichier "loadSlashCommands.js" ajoute chaque slash command dans une liste, il défini les différents champs les composants(ex: nom, description, etc...),
la manière de lire les slash commands, puis il les ajoutent dans la liste.

Le fichier "loadCommands.js" lit uniquement le nom des fichiers finissant par js, ensuite il appelle chaque fichier de dossier "Commandes" et enfin,
il affiche dans la console si les slash commands ont été chargées avec succès lors de l'éxécution du programme.

Le fichier "ready.js" appelle le fichier "loadSlashCommands.js" du dossier "Loaders" et charge les données du fichier. Ensuite, simplement à titre indiquatif,
il affichera que le bot est en ligne dans la console.

Le fichier "interactionCreate.js" sera chargé d'exécuter les slash commands par rapport à leur nom.

Le fichier main prendra en compte toutes les instances de Discord pour le bon fonctionnement du bot et se contentera d'appeler les différentes méthodes voulues.
