const { Router } = require('express')
const { getAllBackend, postBackend, putBackend, deleteBackend } = require('../../Backend/controller/controllerBackend')


const routesBackend = Router()

routesBackend.get('/get', getAllBackend)
routesBackend.post('/post', postBackend)
routesBackend.put('/put', putBackend)
routesBackend.delete('/delete', deleteBackend)


module.exports = routesBackend