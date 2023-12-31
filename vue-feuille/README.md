# vue-feuille

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup ( pensez à installer les dépendances manquantes)

```sh
npm install
npm instal nomDependence
```

### Lancez le serveur FrontEnd à l'adresse http://localhost:5173

```sh
npm run dev
```

## Route frontend

> Route de base

- / : route pour le menu principal
- /home : route pour le menu principal

> Route de pour l'utilisateur

- /profile : route pour le profile
- /user : route test pour le contenu usager
- /admin : route test pour le contenu admin

  > Route auhtentification

- /register : route pour se creer un compte
- /login : route pour se connecter

> Route pour les feuilles

- /sheetsForm : route pour creer une feuille
- /sheetsListe : route recuperer les feuilles. Actions supplementaire sur la page (acceder et supprimer une feuille en particulier)
- /sheet/:id : route pour recuperer une feuille en fonction de l'id
