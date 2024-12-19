const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Chargement des variables d'env
dotenv.config();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Connecion à MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connecté à MongoDB !'))
.catch((err) => console.error('Erreur de connexion à MongoDB:', err));




// Routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Node.js !');
});


// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});

