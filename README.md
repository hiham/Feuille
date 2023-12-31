# Feuille
 ProjetDp Rapport
 Frontend : Vue 3 (Utiliser car antecedent avec le framework )
 Backend :  Express (Utiliser car le cours )

## Fonctionnalite de Base

— Création d’un compte
— Connexion

> Ces deux fonctionalites on ete `fortement` inspire du guide [Link](https://www.bezkoder.com/node-express-vue-jwt-auth/). Pas le temps de reeinventer la roue .
	
— Création d’un document vide
— Ouverture d’un document sauvegardé
— Modification d’un document
— Sauvegarde d’un document
— Suppression d’un document

> Le reste des fonctionalites n'ont pas pose de probleme en particulier vu qu'il y avait des antecedent avec les framework concernes.
>L'usage de JSON est juste un choix de facilite pour la persistence des données.
> On reste dans un modele classique de conception fullstack avec les routes , les controlleurs , les services et les vues.

## Fonctionnalite demandées

— Persistance des données,
Utilisateur : BDD MYSQL
Feuille : JSON
— Partage d’un document sauvegardé avec d’autres utilisateurs :
On peut acceder a un ficher partage avec nous , le modifier et le sauvegarder.
La suppression est réservée au propriétaire du document.
— Affichage des utilisateurs travaillant simultanément sur le même document :
Seulement les utilisateurs dont les feuilles sont partagees apparaissent dans la liste, en tooltip.

## Plus de d'info
Le projet a ete fait un peu a la va vite en vu d'un manque d'organisation.Seulement les fonctionalites de base ont ete implementees avec certaines fonctionnalites demandées
implementees. Le JSON est alimente de feuille.On utilise le systeme de stockage local de chrome pour garder la persistence de l'usager 
connecte.