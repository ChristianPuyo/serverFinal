const sequelize = require('../db')
const Student = require('./Student')
const Course = require('./Course')

//Importar todos los modelos
const db = { 
    sequelize,
    Student,
    Course
}

module.exports = db