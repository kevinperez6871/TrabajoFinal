import jwt from "jsonwebtoken";

const checkAuth  = (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        // console.log('Si hay un token con Bearer');
        try {
            //parte la cadena del token en un arreglo a partor de los espacios
            token = req.headers.authorization.split(' ')[1];
        } catch (error) {
           const e = new Error("Token no Válido");
           res.status.json({msg: e.message}); 
        }
    }
    const error = new Error('Token no valido o inexistente');
    res.status(403).json({msg: error.message});

    next();
};

export default checkAuth