const {Router} = require("express")

const {
    createCourseController,
    getAllCourses,
    deleteCourse,
    updatedCourse
} = require('../controllers/courseController')

const courseRouter = Router()

//Crear una ruta para crear un nuevo curso
courseRouter.post("/", async(req, res)=>{
    const {name, description} = req.body
    try {
        const newCourse = await createCourseController({name, description})
        res.status(201).json(newCourse)  
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Ruta para obtener todos los cursos
courseRouter.get("/", async(req,res)=>{
    try {
        const courses = await getAllCourses();
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Ruta para eliminar
courseRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    try {
       const deletedCourse = await deleteCourse(id)
       if(!deletedCourse){
        return res.status(404).json({errorRuta: "Course not found" })
       }
       res.status(200).json({message: "Course deleted succesfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Ruta para actualizar curso
courseRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const courseData = req.body
    try {
        const updateCourse = await updatedCourse(id, courseData)
        if(!updateCourse){
            return res.status(404).json({error:"Course not found"})
        }
        res.status(200).json(updatedCourse)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = courseRouter