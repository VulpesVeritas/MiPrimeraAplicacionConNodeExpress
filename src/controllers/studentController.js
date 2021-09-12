const Student = require('../models/studentSchema');
const SchooStudentl = require('../models/studentSchema')

exports.student_create = (req, res) => {
    const {body} = req;

    let student = new Student(body);

    await student
            .save()
            .catch(err => {
                console.log("Ups!", err);
            })

    res.send(student);
}

exports.student_getall = async (req, res) => {
    const data = await Student.find().populate("school"); //esto me trae todo el objeto obtenido, en este caso school, no es la tabla. solo el campo.

    res.send(data);
}