//ESC6 siempre, buenas practicas
import {Router} from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', (req, res) => { 
    res.send('Tasks')
});

router.post('/', async (req, res) => { 
    //Guardamos la tarea nueva en una constante. 
    const newTask = new Task({
        title: req.body.title,
        descripcion: req.body.descripcion,
    });
    await newTask.save();//Guardamos la tarea en la DB
    console.log(newTask);
    res.json({message: "New Task created"});

});

export default router;