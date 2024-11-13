import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


//Instacia de express
const app = express();


//
app.listen(process.env.PORT, () => {
    console.log(`App corriendo en el puerto: ${process.env.PORT}`);
})

//
app.use(express.json());

//
// app.use(express.static('public'));