//ESC6 siempre, buenas practicas
import {Schema, model} from 'mongoose';
//Módilo de mongoose que nos provee métodos de paginación
import mongoosePaginate from 'mongoose-paginate-v2';

//Usamos el método Schema para darle las props. 
//Le tenemos que pasar que tipo de dato son.  
const taskSchema = new Schema({
        title: {
        type: String,
        required: true,
        //"trim() es trim misma función esta prop."
        trim: true
        },
        descripcion: {
        type: String,
        trim: true
        }, 
        done: {
        type: Boolean,
        default: false,
        },
    },
        {//props que se agregan internamente. false en version y le sumamos los datos del tiempo de creacion.  
        versionKey: false,
        timestamps: true    
        }
);
//Acá ya tenemos la paginación lista para ser utilizada.
taskSchema.plugin(mongoosePaginate);
//Ahora usamos "model" que importamos del módulo. 
//Como último exportamos para poder utilizar el método creado. 
export default model("Task", taskSchema);