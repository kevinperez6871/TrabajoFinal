import estudiante from "../models/estudiantes.js";
import bcrypt from 'bcrypt'
import JWT from "../helpers/JWT.js";

const registro = async(req, res) =>{
    const {email,password} = req.body
    //Validación de usuarios replicados
    const existeUsuario = await estudiante.findOne({email});
    
    if(existeUsuario){
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg:error.message});
    }

    try {
        //Guardar un nuevo registo
      const NuevoEstudiante = new estudiante(req.body);
      
      //Encriptacion contraseña
      const salt = bcrypt.genSaltSync();
      NuevoEstudiante.password = bcrypt.hashSync(password, salt);
      //
      const EstudianteGuardado = await NuevoEstudiante.save();

      res.status(201).json(EstudianteGuardado);
    } catch (error) {
        console.log(error);
    }
};

const perfil = (req, res) =>{
    res.send('Mostrando Perfil')
}

const confirmarCuenta = async (req,res) => {
    //Buscar persona por token - destructuring 
    const {token} = req.params
    //validación de estudiante por token
    const usuarioConfirmar = await estudiante.findOne({token});
    //
    if(!usuarioConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }
    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save();
        res.json({msg:"Usuario Confirmado Correctamente"});
    } catch (error) {
        console.log(error);
    }

}

const autenticar = async(req, res) => {
    const {email, password} = req.body

    const usuario = await estudiante.findOne({email});

    if(!usuario){
        const error = new Error('El usuario No existe');
        return res.status(401).json({msg: error.message});
    }

    if(!usuario.confirmado){
        const error = new Error('El correo no ha sido confirmado');
        return res.status(403).json({msg:error.message});
    }

   // Verificar que el password sea correcto
    const validarPassword = bcrypt.compareSync(password, usuario.password);
   
   if(validarPassword){  
        //Almacenar JWT 
        res.json({token: JWT(usuario.id)});
        // return res.json({msg:"Contraseña Correcta"})
        
    }else{
        const error = new Error('Password Incorrecto');
        return res.status(403).json({msg:error.message});
    }

};

export {registro, perfil, confirmarCuenta, autenticar}

