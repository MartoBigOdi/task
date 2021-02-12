//ESC6 siempre, buenas practicas
import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => { 
    res.send('Tasks')
});

export default router;