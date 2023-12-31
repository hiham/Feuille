# Feuille
 >  **Rapport** <br />
 Frontend : Vue 3 (Utiliser car antécedent avec le framework )<br />
 Backend :  Express (Utiliser car le cours )

## Fonctionnalite de Base

* Création d’un compte
* Connexion

> Ces deux fonctionalites on été `fortement` inspiré du guide [Link](https://www.bezkoder.com/node-express-vue-jwt-auth/). Pas le temps de réeinventer la roue .
	
* Création d’un document vide
* Ouverture d’un document sauvegardé
* Modification d’un document
* Sauvegarde d’un document
* Suppression d’un document

> Le reste des fonctionalités n'ont pas posé de probleme en particulier vu qu'il y avait des antécedent avec les framework concernés.
> L'usage de JSON est juste un choix de facilité pour la persistence des données.
> On reste dans un modele classique de conception fullstack avec les routes , les controlleurs , les services et les vues.

## Fonctionnalite demandées

* Persistance des données : `Utilisateur : MYSQL` `Feuille : JSON`
* Partage d’un document sauvegardé avec d’autres utilisateurs :
On peut acceder à un ficher partage avec nous , le modifier et le sauvegarder.
La suppression est réservée au propriétaire du document.
* Affichage des utilisateurs travaillant simultanément sur le même document :
Seulement les utilisateurs dont les feuilles sont partagées apparaissent dans la liste, en tooltip.

## Plus d'info
Le projet a été fait un peu à la va vite en vu d'un manque d'organisation.Seulement les fonctionalités de base ont été implementées avec certaines fonctionnalites demandées
implementées. Le JSON est alimenté de feuille pour faciliter l'utilisation du site.On utilise le systeme de stockage local de chrome pour garder la persistence de l'usager 
connecté.
