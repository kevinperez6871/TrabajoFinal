import jwt from 'jsonwebtoken';

const JWT = (id) => {
    //Información que se almacenara en el JWT
    return jwt.sign({id}, process.env.JWT_SECRET,{
        //Expiración JWT
        expiresIn: '20d',
    });
};

export default JWT;