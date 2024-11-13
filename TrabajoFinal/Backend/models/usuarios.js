import mongose from 'moongose';

const usuariosSchema = new checkSchema({

    name:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono:{
        type: String,
        required: true,
        trim: true
    },
    token:{
        type: String
    },

});