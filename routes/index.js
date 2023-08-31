const express = require('express');
const router = express.Router();
const fs = require('fs');

const path_routes = __dirname;

const removeExtension = (fileName) =>{
    return fileName.split(".")[0]
}

fs.readdirSync(path_routes).filter((file) => {


})

module.exports = router;