//aqui se definen las rutas validas a un esquema o modelo
//aqui estaran las FUNCIONALIDADES
const School = require('../models/schoolSchema') //doble punto es regresar de carpeta

exports.school_create = async (req, res) => {
    //tomar los datos del body
    const {body} = req;  //le sacamos una copia y lo guardamos en esa variable 
//body esta a la altura de req

    //console.log(req.body)

    //  Validacion de informacion
    //  campos requeridos, longitud de textos, valores numericos mayores o menores a X, tenga un valor


    //Y si no se cumplen(esto va dentro de un if): 
    //res.send({message: "El campo tal, no cumple con X validacion"})



    let newSchool = new School(body);
    

    await newSchool
    .save()
    .then(newDBObject => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

    res.send(newSchool);
};

exports.school_getall = async (req, res) =>{
    //consultara todos los registros de la base de datos y los regresara como lista
    const data = await School.find();

    res.send(data); //regresara el data
}; 

exports.school_getbyid = async (req, res) => {
    //req.query
    //console.log(req.params);
    const {id} = req.params; //id esta a la altura de params


    //validacion de que si trae un parametro

    const data = await School.findById(id)

    res.send(data);
};

exports.school_update = async (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await School.findOneAndUpdate({_id: id}, body);
    //esto busca y me lo regresa y luego me lo actualiza. Entonces data contiene la version original

    res.send(data);
};

exports.school_delete = async (req, res) => {
    const {id} = req.params;

    await School.deleteOne({_id: id});

    res.send({message: "School deleted sucessfully"});
}

//CRUD
//Esto es un CRUD de una entidad mi base de datos, de una tabla. 