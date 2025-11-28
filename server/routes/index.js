const {Router} = require("express")
const courseRouter = require('./courseRoutes')
const studentRouter = require('./studentRoutes')

const router = Router();

router.use('/course', courseRouter)
router.use('/student', studentRouter)


module.exports = router