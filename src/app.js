//ESC6 siempre, buenas practicas
//const express = require('express');
//Utilizando Babel
import express from 'express';
import TasksRoutes from './routes/tasks.routes'
const app = express();


//Si nos dan un puerto 
app.set('port', process.env.PORT || 4000);


app.get('/', (req, res) => {
    res.json({message: 'Hola Giles'})
});
 

//De esta manera le ponemos '/' cuantos queramos a las rutas que vienen de esta dirección. 
app.use('/api/tasks', TasksRoutes);

export default app;