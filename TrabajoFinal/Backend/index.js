import express from 'express';
import dotenv from 'dotenv';
import authEstudiantes from './views/authEstudiantes.js';
import { dbConnection } from './database/dbConection.js';
dotenv.config();


//Instacia de express
const app = express();

//Base de datos
dbConnection();

//Formateo del Json
app.use(express.json());

//Router
app.use('/', authEstudiantes)

//
app.listen(process.env.PORT, () => {
    console.log(`App corriendo en el puerto: ${process.env.PORT}`);
})


//
// app.use(express.static('public'));