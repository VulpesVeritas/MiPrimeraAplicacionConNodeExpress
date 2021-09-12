//en este lugar se definen las rutas validas
const express = require('express');
const router = express.Router(); //objeto dentro de express que nos permite definir rutas dentro de nuestra aplicacion, nuestro API

const school_controller = require('../controllers/schoolController'); //este es controller que tiene las funciones
//Le tenemos que indicar 3 cosas:



//Metodo http
//Ruta
//Funcion js
//Por cada conjunto de estos 3 parametros nos creara una ruta valida dentro de nuestra aplicacion

router.post('/school', school_controller.school_create);//Cuando venga un post a la ruta /school, ejecuta la funcion school create de school controller
router.get('/school', school_controller.school_getall);
router.get('/school/:id', school_controller.school_getbyid);
router.put('/school/:id', school_controller.school_update);
router.delete('/school/:id', school_controller.school_delete);

module.exports = router; //exportamos el router, porque contiene todas las rutas que nosotros definamos
