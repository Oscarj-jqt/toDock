const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./src/routes/routes_task');
const path = require('path');

// Chargement des variables d'env
dotenv.config({ path: path.resolve(__dirname, '.env') });



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connecté à MongoDB '))
.catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Fichier statiues

app.use(express.static(path.join(__dirname, 'public')));

// Intégration des routes dans le serveur
app.use(taskRoutes);

// Lancement du serveur
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur le port ${PORT}`);
    });
}

// Export pour les tests
module.exports = app;