const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')
require('dotenv').config();

app.use(cors())
const port = process.env.port || 3000;

dbConnect();

app.listen(port, console.log(`El servidor esta corriendo en http://localhost:${port}`))