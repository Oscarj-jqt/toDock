const express = require('express');
const Task = require('../models/task.js');

const router = express.Router();

// Récupérer toutes les tâches
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
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





module.exports = router;
