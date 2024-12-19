const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Chargement des variables d'env
dotenv.config();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Node.js !');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connexion à MongoDB réussie');
        app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
    })
    .catch(err => console.error('Erreur de connexion à MongoDB', err));
