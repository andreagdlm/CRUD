let tasks = [
    {
        id: 1, 
        title: "Tarea 1", 
        descripcion: 'Descripcion de la Tarea 1'
    },
    {
        id: 2, 
        title: "Tarea 2", 
        descripcion: 'Descripcion de la Tarea 2'
    },
    {
        id: 3, 
        title: "Tarea 3", 
        descripcion: 'Descripcion de la Tarea 3'
    }
];

function getAllTasks(){
    return tasks;
}

function createTask(title, descripcion){
    const newTask = {
        id: tasks.length + 1,
        title: title || `Tarea ${tasks.length + 1}`,
        descripcion: descripcion || `Descripción de la Tarea ${tasks.length + 1}`
    };
    tasks.push(newTask);
    return newTask;
}

function deleteTask(id) {
        // RECORRER LAS TAREAS
        for (let i = 0; i < tasks.length; i++) {
            // ID
            if (tasks[i].id === id) {
                // ELIMINAR LA TAREA
                let deletedTask = tasks.splice(i, 1);
                return deletedTask[0]; // DEVOLVER LA TAREA ELIMINADA
            }
        }
        return null; // SI LA TAREA NO SE ENCUENTRA 
}

function putTask(id, title, descripcion) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        // ACTUALIZAR TAREA
        task.title = title || task.title; // SI NO SE ACTUALIZA EL TITULO PERMANECE EL ANTERIOR
        task.descripcion = descripcion || task.descripcion; // SI NO SE ACTUALIZA DESCRIPCION PERMANECE EL ANTERIOR
        return task;
    }
    return null; // SI LA TAREA NO SE ENCUENTRA
}

function getTaskById(id) {
    const task = tasks.find(task => task.id === id); // BUSCAR POR ID
    return task || null; // DEVOLVER TAREA O NULL DE NO SER ENCONTRADA
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    putTask,
    getTaskById
}