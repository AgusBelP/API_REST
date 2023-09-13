const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./config/mongo')
require('dotenv').config();
const port = process.env.port || 3000;

app.use(cors())
app.use(express.json())
app.use(express.static('storage'));

// Definición de las rutas
const indexRoutes = require('./routes')

app.use('/api', indexRoutes)

dbConnect();

app.listen(port, console.log(`El servidor esta corriendo en http://localhost:${port}`))