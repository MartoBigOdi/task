//ESC6 siempre, buenas practicas
//DOTENV maneja las variables de entorno
import { config } from "dotenv";
config();

export default{
    mongodbURL: process.env.URI_MONGODB
}; 