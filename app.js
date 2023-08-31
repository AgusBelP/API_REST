const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./config/mongo')
require('dotenv').config();
const port = process.env.port || 3000;

app.use(cors())

// Definición de las rutas
const trackRoutes = require('./routes/tracks.routes')
const indexRoutes = require('./routes')

app.use('/api', indexRoutes)

dbConnect();

app.listen(port, console.log(`El servidor esta corriendo en http://localhost:${port}`))