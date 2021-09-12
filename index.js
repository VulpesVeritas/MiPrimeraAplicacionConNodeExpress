//manten este documento lo mas chico posible, solo usalo para iniciar la app y apuntar (de ahi index)
const express = require('express');  //tengo que tenerlo para decirle a la app para que se conporte como una aplicacion de express
const bodyParser = require("body-parser"); //libreria que ayuda a convertir json a objetos
require('./src/models/connection'); //necesito conectarme a la base de datos

/* requires de rutas */
//todos los requires de todos los router que hayamos definido
const school_router = require('./src/routes/schoolRouter'); //express neceista rutas para poder funcionar, aqui las defino----!
//const student_router = require('./src/routes/studentRouter');


const app = express();
const port = 3000; //5000  //5001

app.use(bodyParser.json());
//aqui vamos poniendo los router de acuerdo a los modelos que yo tengo
app.use('/api', school_router); //y asi para definir las rutas----!
//app.use('/api', school_router);
//app.use('/api', student_router)

//app.use(express.bodyParser.json()); //ambas sirven, solo que esto es interno

//MEtodos HTTP
//GET          consultas de informacion
//POST          crear
//PUT           actualizar
//DELETE        eliminar informacion en el servidor
//OPTIONS       preguntar por ruta? 
//HEAD          consultar ruta?

//hora 2 del video 

//app.get('/', (req,res) => {
//    res.send("Hola, soy Express")
//});


//req es la solicitud
//res es la respuesta de nuestro mensaje, es necesario porque la aplicacion se atoraria sin ella
app.get('/', (req, res) => { //Al parecer deberia quitar esto-------------------------------
    //req
    //las que mas nos interesan son:
    //req.query     le envias datos a la solicitud, le envias datos al servidor. Siempre y cuando se puede representar como texto
     //req.body
    console.log(req.query);
    const {idproducto} = req.query;

    console.log(idproducto);
   
    
    res.send("Hola, soy un GET");
})

app.post('/', (req, res) => {
    console.log('req.body', req.body); //es el mensaje de la solicitud. Su body. En post man, post, en body, selecciona raw y JSON
    res.send("Hola, soy un POST");
})  
//Al parecer deberia quitar esto hasta aqui------------------------------
app.get("/", (req,res) =>{
});
app.post("/", (req,res) =>{
});



app.listen(port, () => { //como se ejecutara mi API, en que puerto se ejecuta
    console.log('La aplicacion esta escuchando al puerto http://localhost:' + port) //lo que se ejecuta despues de inicializarse 
})
//esto es minimalista porque usas pocas lineas de codigo para hacer la aplicacion