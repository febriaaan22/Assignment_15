const express = require('express')
const routesBackend = require('../Backend/routes/routesBackend')
const applyMiddleware = require('./middleware')

const app = express()

applyMiddleware(app);

app.use(routesBackend)
app.get('/', (req, res) => {
    res.send('Assignment Week 15! CORS')
});

app.listen(3000, () =>
    console.log('Server is running on port 3000')
)
