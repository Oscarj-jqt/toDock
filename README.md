# ToDock

Ce projet permet de gérer une application de liste de tâches simple, avec une interface permettant d'ajouter, de supprimer et de marquer des tâches comme terminées. Le backend est développé en **Node.js avec MongoDB**, et l'application est conteneurisée avec **Docker** pour un déploiement simplifié. L'application inclut également des tests unitaires pour valider son bon fonctionnement.

## Description des Choix Techniques

### Backend - Node.js & MongoDB
* **Node.js** est utilisé pour la gestion des requêtes backend, le traitement des données et l'API REST.
* **MongoDB** est la base de données choisie pour stocker les tâches. Chaque tâche a un titre, une description, un état (en cours/terminée) et une date limite.

### Frontend - HTML, CSS, et JavaScript
* Le **frontend** est simple et minimaliste avec du **HTML**, du **CSS** pour le design, et du **JavaScript** pour rendre l'application interactive. Les utilisateurs peuvent ajouter, marquer comme terminées, ou supprimer des tâches via l'interface.


### Conteneurisation avec Docker
* L'application est conteneurisée à l'aide de **Docker** pour faciliter son déploiement sur n'importe quel environnement. Le fichier `Dockerfile` est utilisé pour construire l'image Docker et `docker-compose.yml` pour gérer les conteneurs de l'application et de la base de données.

## Fonctionnalités Principales
* **Ajout de tâches** : Les utilisateurs peuvent ajouter des tâches avec un titre et une description.
* **Marquer les tâches comme terminées** : Les utilisateurs peuvent marquer des tâches comme terminées.
* **Suppression de tâches** : Les utilisateurs peuvent supprimer des tâches de la liste.
* **Gestion de la base de données** : Les tâches sont stockées dans une base de données MongoDB.

## Prérequis

Avant de démarrer le projet, assure-toi d'avoir installé les éléments suivants :

* **Node.js** 16 ou supérieur
* **MongoDB** (version locale ou Atlas)
* **Docker** et **Docker Compose**

## Instructions pour l'installation

### Cloner le projet
```bash
git clone https://github.com/Oscarj-jqt/toDock

```

## Contributeurs au projet
Oscar et Alexis
