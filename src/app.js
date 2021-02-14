//ESC6 siempre, buenas practicas
//const express = require('express');
//Utilizando Babel
import express from 'express';
import TasksRoutes from './routes/tasks.routes'
import morgan from 'morgan';
const app = express();



//Si nos dan un puerto 
app.set('port', process.env.PORT || 4000);
//Indicamos que use express.json() para leer los json del "req.body"
app.use(express.json());
app.use(morgan("Estas en desarrollo"));


app.get('/', (req, res) => {
    res.json({message: 'Prueba de API con MONGO DB'})
});
//De esta manera le ponemos '/' cuantos queramos a las rutas que vienen de esta dirección. 
app.use('/api/tasks', TasksRoutes);

export default app;