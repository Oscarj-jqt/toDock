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
    const { title, completed } = req.body;
    console.log('Requête reçue :', req.body); // Afficher le corps de la requête

    try {
        const newTask = new Task({ title, completed });
        console.log('Nouvelle tâche créée :', newTask); // Vérifiez que l'objet Task est créé correctement

        const savedTask = await newTask.save();
        console.log('Tâche sauvegardée dans MongoDB :', savedTask); // Vérifiez que la tâche est bien sauvegardée

        res.status(201).json(savedTask); // Retourner la tâche sauvegardée
    } catch (err) {
        console.error('Erreur lors de la sauvegarde dans MongoDB :', err.message); // Ajoutez des détails sur l'erreur
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
