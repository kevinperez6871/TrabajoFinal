import jwt from 'jsonwebtoken';

const JWT = () => { 
    return jwt.sign({nombre: 'Juan'}, process.env.SECRET_JWT,{
        expiresIn: '20d',
    });
};

export default JWT;