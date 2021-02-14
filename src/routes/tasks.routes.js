//ESC6 siempre, buenas practicas
import {Router} from 'express';
//importamos todas las funciones del controlador
import * as taskController from '../controllers/task.controller'


const router = Router();

//Ruta GET que devuelve todas las tareas dadas.
router.get('/', taskController.findAllTasks);

//Creamos una tarea nueva con esta ruta y la guardamos
router.post('/', taskController.createTask);

//Ruta para buscar tarea por ID
router.get('/:id', taskController.findById)

//Ruta para borrar tarea por ID
router.delete('/:id', taskController.deleteTask)


export default router;