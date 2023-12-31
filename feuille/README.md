# Feuille

Backend du serveur

## DataBase

Mysql a été utilié dans le cadre du projet. Il faudra s'assurer que MYSQL est
installe sur votre machine. Tout ce fait localement.Les feuilles sont sauvegardées dans `sheets.JSON` .

Les utilsateurs de base sont :<br />
>Username : admin<br />
>Mdp : 123456

>Username : hiham<br />
>Mdp : 123456

A chaque redémarage du serveur , les nouveaux utilisatuers sont ecrasés. Les feuilles par contre restes sauvegardées dans le JSON.

## Project Setup

```sh
npm install
npm install mysql2
```

### Lancer le serveur Backend a l'adresse http://localhost:8080

```sh
node server.js
```

## Route backend

> Route utilisateur

- */api/test/all* : route test pour le contenu public
- */api/test/user* : route test pour le contenu usager
- */api/test/admin* : route test pour le contenu admin

> Route auhtentification

- */api/auth/signup* : route pour se creer un compte
- */api/auth/signin* : route pour se connecter

> Route pour les feuilles

- */sheets* : `get` route pour recuperer toutes les feuilles
- */sheets* : `post` route creer une feuille
- */sheets/:id* : `get` route pour recuperer une feuille en fonction de l'id
- */sheets/:id* : `put` route pour modifier une feuille en fonction de l'id
- */sheets/:id* :`delete` route pour supprimer une feuille en fonction de l'id
- */sheets/author/:author* :`get` pour recuperer les feuilles en fonction de l'auteur
- */sheets/shared/:user* : `get` route recuperer lesf feuilles partagees
