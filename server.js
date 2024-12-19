const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./src/routes/routes_task');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '.env') });

// Chargement des variables d'env
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/tasks', taskRoutes);
// Connecion à MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connecté à MongoDB '))
.catch((err) => console.error('Erreur de connexion à MongoDB:', err));




// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});

// Intégration des routes dans le serveur
app.use(taskRoutes);

