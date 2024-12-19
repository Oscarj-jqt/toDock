const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

//création d'un modèle --> créer une collection task avec un nom et statut
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
