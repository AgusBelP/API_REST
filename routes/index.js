const express = require('express');
const router = express.Router();
const fs = require('fs');

const path_routes = __dirname;

// Elimino la extensión "".js" del archivo
const removeExtension = (fileName) =>{
    return fileName.split(".")[0]
}

// Se hace esto para que el index sea el encargado de la carga dinámica de las páginas, se escanean todos los arhcivos en el directorio, se filtra, se remueve la extensión y omitiendo el archivo index se carga la ruta
fs.readdirSync(path_routes).filter((file) => {
    const name = removeExtension(file);
    if(name !== "index"){
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router;