const db = require('./models/index')
const server = require('./server')

db.sequelize.sync({alter: true})//Sincroniza modelos con la bd
    .then(()=>{
        server.listen(3001, ()=>{
            console.log('Server listening on port 3001')
        })
    })
    .catch(err => console.log('Error:', err))
