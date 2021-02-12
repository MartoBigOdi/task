//ESC6 siempre, buenas practicas
import mongoose from 'mongoose';
//Config tiene le URI de la DB
import config from './config';
import 'colors';

//Connection DB
(async () => {
    const database = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(" Name DB connected:".trap.blue, database.connection.name.blue);
})();


 