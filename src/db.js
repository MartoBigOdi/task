//ESC6 siempre, buenas practicas
import mongoose from 'mongoose';
//Config tiene le URI de la DB
import config from './config';
import 'colors';

//Connection DB
(async () => {
    try {
        const database = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
        });
        console.log("DB:".trap.blue, database.connection.name.blue);
    }
    catch (error){
        console.log(error)
    }
})();


 