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
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
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
