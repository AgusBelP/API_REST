const mongoose = require('mongoose');
require('dotenv').config()

const dbConnect = () => {
    const DB_URI= process.env.DB_URI;
    mongoose
    .connect(
        DB_URI, 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
    .then(() => console.log('Conexión exitosa'))
    .catch(() => console.log('Error en la conexión'))
};

module.exports = {
    dbConnect
}