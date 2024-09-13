const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req,res) => {
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks);
});

router.post('/',(req,res)=>{
    const {title, description} = req.body;
    // const title = req.body.title;
    // const description = req.body.description;
    const newTask = taskController.createTask(title,description);
    res.status(200).json(newTask);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id); // OBTENER ID
    const deletedTask = taskController.deleteTask(id);
    
    if (deletedTask) {
        res.status(200).json(deletedTask);
    } else {
        res.status(404).json({ message: "TAREA NO ENCONTRADA" });
    }
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    const updatedTask = taskController.putTask(id, title, description);

    if (updatedTask) {
        res.status(200).json(updatedTask);
    } else {
        res.status(404).json({ message: "TAREA NO ENCONTRADA" });
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = taskController.getTaskById(id);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: "TAREA NO ENCONTRADA" });
    }
});

module.exports = router;