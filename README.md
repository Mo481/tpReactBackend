#  Backend - Projet Annonces (Node.js / Express / MongoDB)

Ce backend fait partie d'une application complète de type "Le BonCoin", développée avec la stack MERN. Il gère les opérations liées aux utilisateurs (authentification) et aux annonces (CRUD) via une API REST sécurisée avec JWT.


## Fonctionnalités

-  Authentification (inscription, connexion) avec mots de passe hashés
-  Création et suppression d'annonces protégées par token JWT
-  Récupération de toutes les annonces disponibles
-  Middleware d'authentification
-  Base de données MongoDB avec Mongoose


##  Technologies utilisées

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- Dotenv
- Cors


##  Structure du projet

- Controllers/
Contient la logique métier.

annonceController.js : fonctions pour créer, lire et supprimer des annonces.

authController.js : gère l'inscription, la connexion et le login JWT.

- Middleware/

auth.js : middleware qui vérifie si un utilisateur est authentifié via un token JWT.

- Models/
Contient les modèles Mongoose qui définissent la structure des données.

- User.js : modèle de l'utilisateur (email, mot de passe, etc.).

- Annonce.js : modèle d'une annonce (titre, description, prix, etc.).

- Routes/
Contient toutes les routes de l’API.

- authRoutes.js : routes pour l'inscription et la connexion.

- annonceRoutes.js : routes pour gérer les annonces (CRUD).

- .env
Fichier de configuration contenant les variables d’environnement (comme la chaîne de connexion MongoDB et le secret JWT).

- app.js
Point d'entrée principal de l’application. Démarre le serveur Express, connecte MongoDB, utilise les routes.

- package.json
Fichier qui liste les dépendances Node.js, les scripts, et les infos du projet.


## Fonctionnalités implémentées

- Inscription et connexion sécurisées des utilisateurs
- Création, récupération et suppression d'annonces
- Protection des routes sensibles par authentification JWT
- Validation des données côté backend
- Gestion des erreurs et des statuts HTTP appropriés
- Séparation claire entre logique métier, routes et modèles
- Utilisation de variables d'environnement pour la configuration
- Hashage des mots de passe avec Bcrypt
- Middleware d'authentification réutilisable
- Connexion à une base MongoDB avec Mongoose
- CORS configuré pour accepter les requêtes du frontend
# tpReactBackend
