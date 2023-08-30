const mongoose = require('mongoose')
require('dotenv').config()
const DB_URI= process.env.DB_URI;

const dbConnect = () => {
    mongoose.connect(
        DB_URI, 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        },
        (err,res) =>{
            if(!err){
                console.log("Conexión exitosa");
            }else{
                console.log("Error de conexión");
            }
        })
};

module.exports =  dbConnect