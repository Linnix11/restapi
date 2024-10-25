# RestAPI Made by Linnix

## Description
Cette RestAPI permet de gérer des éléments dans une base de données. Elle inclut des fonctionnalités pour récupérer, créer et supprimer des éléments à l'aide de requêtes HTTP.

## Prérequis

- [Node.js](https://nodejs.org/) (version recommandée : 16.x ou plus)
- Un serveur local avec une base de données MySQL, tel que [MAMP](https://www.mamp.info/en/) ou [XAMPP](https://www.apachefriends.org/index.html)
- [Postman](https://www.postman.com/downloads/) pour tester l'API

## Installation

1. **Décompressez** le fichier après l'avoir téléchargé.
2. **Installez Node.js** si ce n'est pas déjà fait en visitant [nodejs.org](https://nodejs.org).
3. **Installez MAMP ou XAMPP** pour configurer un environnement de base de données local.
4. **Créez une nouvelle base de données** à l'aide de phpMyAdmin, inclus dans MAMP ou XAMPP.
5. **Ouvrez le projet** dans [Visual Studio Code](https://code.visualstudio.com/).

## Configuration

1. **Accédez** au fichier `index.js` dans le dossier du projet.
2. **Modifiez la ligne 19** pour y mettre le nom de la base de données que vous avez créée :
    ```js
    database: 'your_database_name'
    ```
   Remplacez `'your_database_name'` par le nom de votre base.

## Lancer le projet

1. **Ouvrez le terminal** dans VS Code.
2. **Installez les dépendances** en tapant la commande suivante :
    ```bash
    npm install
    ```
3. **Démarrez le serveur** en tapant :
    ```bash
    npm start
    ```
    Si tout fonctionne correctement, vous verrez dans le terminal : **"C GOOD"**.

## Utilisation de l'API avec Postman

### 1. Récupérer tous les éléments
- **Méthode** : `GET`
- **URL** : `http://localhost:3000/items`

### 2. Supprimer un élément
- **Méthode** : `DELETE`
- **URL** : `http://localhost:3000/items/1`
  (Remplacez `1` par l'ID de l'élément à supprimer.)

### 3. Créer un nouvel élément
- **Méthode** : `POST`
- **URL** : `http://localhost:3000/items`
- **Body** : 
  - Choisissez `Raw`, sélectionnez `JSON`, et collez le format suivant :
    ```json
    {
      "name": "test3333",
      "description": "test3333",
      "price": 13.99,
      "id_category": 3
    }
    ```

## Technologies utilisées

- **Node.js** : Serveur backend
- **MySQL** : Base de données
- **Postman** : Test des requêtes API

## Auteurs

- **Linnix**

---

Ceci est un modèle simple pour l'API que vous pouvez facilement cloner et configurer.
