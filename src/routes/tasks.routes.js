//ESC6 siempre, buenas practicas
import {Router} from 'express';
//importamos todas las funciones del controlador
import * as taskController from '../controllers/task.controller'


const router = Router();

//Ruta GET que devuelve todas las tareas dadas.
router.get('/', taskController.findAllTasks);

//Creamos una tarea nueva con esta ruta y la guardamos
router.post('/', taskController.createTask);

//Ruta para buscar las tareas hechas "done: true" 
router.get('/done', taskController.findAllTaskDone) //IMPORTANTE poner la ruta antes de las busquedas de ID porque nos genera un error forzado, crea un conflicto de rutas

//Ruta para buscar tarea por ID
router.get('/:id', taskController.findById)

//Ruta para borrar tarea por ID
router.delete('/:id', taskController.deleteTask)

//Ruta para actualizar tarea por ID
router.put('/:id', taskController.updateTask)

export default router;