import mongoose from 'mongoose'; 

const dbConnection = async () => {

    try {
        // Conexión a la base de datos usando la variable de entorno DB_CNN
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,    // Opcional: Para evitar advertencias de Mongoose
            useUnifiedTopology: true, // Opcional: Para evitar advertencias de Mongoose
        });
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }

}

export {
    dbConnection
};