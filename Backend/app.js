const express = require('express')
const routesBackend = require('../Backend/routes/routesBackend')

const app = express()

app.use(routesBackend)
app.get('/', (req, res) => {
    res.send('Assignment Week 15! CORS')
});

app.listen(3000, () =>
    console.log('Server is running on port 3000')
)
