//ESC6 siempre, buenas practicas
//const express = require('express');
//Utilizando Babel
import express from 'express';
import TasksRoutes from './routes/tasks.routes'
import morgan from 'morgan';
import cors from 'cors';

const app = express();

//Settings
//Si nos dan un puerto 
app.set('port', process.env.PORT || 4000);

//Middlewares
const corsOptions = {}
app.use(cors(corsOptions));//Permite otras peticiones de forma local. 
app.use(express.json());//Indicamos que use express.json() para leer los json del "req.body"
app.use(express.urlencoded({extended:false}));//Ahora si entendemos como recibir forms desde html
app.use(morgan('dev'));//Muestra por consola todas las peticiones que hacemos. 

//Rutes
app.get('/', (req, res) => {
    res.json({
        message: 'Prueba de API con MONGO DB'
    })
});
//De esta manera le ponemos '/' cuantos queramos a las rutas que vienen de esta dirección. 
app.use('/api/tasks', TasksRoutes);

export default app;