//ESC6 siempre, buenas practicas
//Importamos el modelo de la DB para poder utilizar sun métodos, find() o save() por ejemplo.
import Task from '../models/Task';

//exportamos la constante donde guardamos el método que nos trae todas las consultas de la DB
export const findAllTasks = async (req, res) => {
    const task = await Task.find() //Consultamos ala DB y lo guardamos en una const para luego devolver al cliente.
    try {
        res.json(task);
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message || 'Something goes wrong retrieving the task'
            })
    }
};

//exportamos la const para usarla en otro archivo.
export const createTask = async (req, res) => {
    if (!req.body.title) {
        return res
            .status(400)
            .send({
                message: "Content cannot be empty"
            })
    }
    try {
        //Guardamos la tarea nueva en una constante. 
        const newTask = new Task({
            title: req.body.title,
            descripcion: req.body.descripcion,
            done: req.body.done ? req.body.done : false //Usamos un ternario para verificar que venga un valor en la respuesta. Sino pone "false" por default
        });
        await newTask.save(); //Guardamos la tarea en la DB
        console.log(newTask);
        res.json({
            message: "New Task created"
        });
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message || 'Houston, we have a problem'
            })
    }
};


//exportamos la const que usamos para guardar el método que hicimos para busar una tarea por id
export const findById = async (req, res) => {
    const {
        id
    } = req.params;
    const task = await Task.findById(id);
    if (!task) {
        return res
            .status(400)
            .json({
                message: `There is no ID Task: ${id}`
            })
    }
    try {
        res.json(task);
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message || 'Houston, something goes wrong finding the task'
            })
    }
};


//exportamos la const que usamos para guardar el método que elimina la tarea.
export const deleteTask = async (req, res) => {
    const {
        id
    } = req.params;
    const task = await Task.findById(id);
    if (!task) {
        return res
            .status(400)
            .json({
                message: `There is no ID Task: ${id}`
            })
    }
    try {
        res.json({
            message: `Name Task Deleted: ${task.title} Description: ${task.descripcion}` //Le pasamos data con los bastix
        });
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message || 'Houston, we have a problem'
            })
    }
};


//exportamos la const que contiene el método que devuelve todas las tareas en done: true.
export const findAllTaskDone = async (req, res) => {
    const tasks = await Task.find({
        done: true
    }); //Consultamos ala DB y lo guardamos en una const para luego devolver al cliente.
    try {
        res.json(tasks);
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message || 'Houston, we have a problem'
            })
    }
};


//exportamos la const que guarda el método para actualizar. "update"
export const updateTask = async (req, res) => {
    const {
        id
    } = req.params;
    if (!id) {
        return res
            .status(400)
            .json({
                message: `There is no ID Task: ${id}`
            })
    }
    const updatedTask = await Task.findByIdAndUpdate(id, req.body) //Este método tiene dos parametros, uno que toma el id de la tarea a actualizar y otro que toma los datos del req.body para hacerlo. 
    try {
        res.json({
            message: `Updated successfully, Task: ${updatedTask.title}`
        });
    } catch (error) {
        res
            .status(500)
            .json({
                message: error.message || 'Houston, we have a problem'
            })
    }
};