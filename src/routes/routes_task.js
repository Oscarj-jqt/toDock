const express = require('express');
const Task = require('../models/task.js');

const router = express.Router();

// Récupérer toutes les tâches
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Création d'une tâche
router.post('/tasks', async (req, res) => {
     // Récupération les données envoyées dans la requête
    const { title, completed } = req.body;

    try {
        const newTask = new Task({
            title,
            completed,
        });

        // Sauvegarde de la tâche créée dans la base de données
        await newTask.save();

        res.status(201).json(newTask); // Retourner la tâche créée en réponse
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur lors de l\'ajout de la tâche' });
    }
});

// Supression de tâche
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Tâche introuvable' });
        }

        res.json({ message: 'La tâche sélectionnée est suprimée', deletedTask }); 
    } catch (err) {
        res.status(500).json({ error: 'Erreur  de serveur' });
    }
});








module.exports = router;
