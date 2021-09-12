//en este lugar se definen las rutas validas
const express = require('express');
const router = express.Router(); //objeto dentro de express que nos permite definir rutas dentro de nuestra aplicacion, nuestro API

const student_controller = require('../controllers/studentController')

router.post("/student",student_controller.student_create)
router.get("/student", student_controller.student_getall)

module.exports = router