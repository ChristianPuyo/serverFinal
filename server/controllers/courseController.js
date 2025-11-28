const Course = require('../models/Course')

//Funcion para crear un nuevo curso
const createCourseController = async(courseData)=>{
    try {
        const newCourse = await Course.create(courseData)
        return newCourse
    } catch (error) {
        throw new Error(error.message)
    }
}
//Funcion para obtener todos los cursos
const getAllCourses = async()=>{
    try {
        const courses = await Course.findAll()
        return courses
    } catch (error) {
        throw new Error(error.message)
    }
}

//Funcion para eliminar
const deleteCourse = async (id) =>{ 
    try {
        const course = await Course.findByPk(id)
        if(!course) return null
        await course.destroy();
        return true;

    } catch (err) {
        throw new Error(err.message)
    }
}

//Controlador para actualizar un curso
const updatedCourse = async(id, courseData)=>{
    try {
        const course = await Course.findByPk(id)
        if(!course) return null
        await course.update(courseData)
        return courseData
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = {
    createCourseController,
    getAllCourses,
    deleteCourse,
    updatedCourse
}
