const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //todas las peticiones de mongoose ahora son globales, pero respetatan la conexion que hacemos aqui
mongoose.connect('mongodb://localhost:27017/PW2?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {useNewUrlParser: true})
.then(()=> console.log("Conectando a la base de datos de mongoDB"))
.catch(()=> {
    console.log('No se pudo conectar con la base de datos de mongoDB. Teminando proceso');
    process.exit();
});

//then es usado si todo sale bien al ejecutar.
//catch es usado cunado hay un error, detiene la ejecucion y ejecuta lo que tiene dentro.

//Javascript utiliza un estandar de programacion es llamado ECMAScript, es un estandar hecho por la gente de javascript.
//Basicamente signidica que el punto y coma a veces no hace falta.
//por ejemplo: un salto de linea es suficiente para diferenciar instrucciones. 
//entonces ya no tengo que preocuparme por el punto y coma, aun puedo usarlos si me da paz mental...


