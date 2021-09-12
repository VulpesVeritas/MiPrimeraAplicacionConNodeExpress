const mongoose = require('mongoose')

const SchoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique:true
    },
    year:{
        type: Number,
        default:1,

    }
})
//lo de aqui arriba son las reglas de la coleccion de la base de datos. 
//El esquema son las reglas, que indican que se puede y no se puede hacer en una coleccion


const School= mongoose.model('school', SchoolSchema); //va a haber un modelo llamado school, representa una coleccion de la BD
module.exports = School; //cuando hagan referencia a la base de datos, use la constante de la base de datos.

//Esto de arriba crea el modelo
//modelo un objeto en mongoose, representa en nuestor codigo colecciones(tablas) de la base de datos

//Plug in: Prettier, le da formato a nuestors archivos
//Asi con control + shift + F acomodara el codigo

//no hay una distincion entre numero enteros y decimales en MongoDB, asi que se usa Number
