# Bot_Discord
Bot Discord permettant des slash commandes personnalisées !

Avant de créer le bot Dicord, je vais représenter la base de données que j'utiliserai sous fome de schéma (MCD, MLD, MPD).

1- MCD de la base de données

(![MCD bot dicord](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/3a81db2f-0d69-4735-8be0-c8461a218755)

2- MLD de la base de données

![MLD bot discord (2)](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/595d1b76-7513-4090-a77c-37461445d16b)

3- MPD de la base de données

![MPD bot discord](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/ca1e45c6-def1-4ee7-9a1e-7520cf65108e)

Ensuite, je peux passer à la programmation du bot Discord.

Tout d'abord, le fichier "config.js" contient le token du bot discord, il faut savoir que chaque bot discord possède son propre token, n'allez pas recopier celui de mon code.

![Capture d'écran 2024-05-15 111553](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/1e7e5d71-3e1d-43d7-b86c-4e976e5b5ff2)

Toutes les slash commands seront dans le dossier "Commandes".

Par exemple, une commande qui me renvoie "hey" quand la commande "/hey" est réalisée

![alt text](https://imagizer.imageshack.com/v2/375x397q90/r/923/iwDPfi.png)

Le fichier "loadSlashCommands.js" ajoute chaque slash command dans une liste, il défini les différents champs les composants(ex: nom, description, etc...),
il permet de lire les options des slash commands si il y en a, puis il les ajoutent dans la liste.

![Capture d'écran 2024-05-16 111333](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/64ffa746-c90c-4b3d-9312-bd86b0bf01ca)

Le fichier "loadCommands.js" lit uniquement le nom des fichiers finissant par js, ensuite il appelle chaque fichier de dossier "Commandes" et enfin,
il affiche dans la console si les slash commands ont été chargées avec succès lors de l'éxécution du programme.

![Capture d'écran 2024-05-16 111221](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/e52cc38d-cb9b-4c43-8b65-412763f3700b)

Le fichier "ready.js" appelle le fichier "loadSlashCommands.js" du dossier "Loaders" et charge les données du fichier. Ensuite, simplement à titre indiquatif,
il affichera que le bot est en ligne dans la console.

![Capture d'écran 2024-05-16 111145](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/80a6ab1b-2d66-47af-b758-1cdcdec427c2)

Le fichier "interactionCreate.js" sera chargé d'exécuter les slash commands par rapport à leur nom.

![Capture d'écran 2024-05-16 111124](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/3c3463b1-152d-4666-a41a-0bace0012a73)

Le fichier main prendra en compte toutes les instances de Discord pour le bon fonctionnement du bot et se contentera d'appeler les différentes méthodes voulues.

![Capture d'écran 2024-05-15 111750](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/01f92a48-3b7f-42c2-8813-fe1ce792d6af)

![Capture d'écran 2024-05-15 113406](https://github.com/RyanLacaze/Bot_Discord/assets/157478500/65c9d24c-fc24-42db-a8b3-ccc5adbbf48d)

