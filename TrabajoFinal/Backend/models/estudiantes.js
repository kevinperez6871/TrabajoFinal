import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import generarIdUnico from '../helpers/generarIdUnico.js';
const estudiantesSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    token:{
        type: String,
        default: generarIdUnico(),
    },
    confirmado:{
        type: Boolean,
        default:false,
    }
});
// // Antes de almacenar el registro - (pre)
// estudiantesSchema.pre('save', async function(){
//     const salt = await bcrypt.genSaltSync();
//     this.password = await bcrypt.hashSync(this.password, salt);
// });

// // Methods - solo ejecuta funciones en este modelo
// estudiantesSchema.methods.comprobarPassword = function(passwordFormulario){
//     return bcrypt.compareSync(passwordFormulario, this.password); //compare -> metodo booleano
// };


const estudiante = mongoose.model("estudiante",estudiantesSchema);
export default estudiante;