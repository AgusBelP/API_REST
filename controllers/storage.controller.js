// El controlador tendrá la lógica de la aplicación. 
const fs = require('fs');
const models = require('../models/index');
const handleErrors = require('../utils/handleErrors');
const { matchedData } = require('express-validator');

require('dotenv').config();
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`; //busca el directorio en donde esta el archivo, navega hacia atrás y va a la carpeta storage

// Obtengo la lista de canciones
const getItems = async(req,res) => {
    try {
        const data = await models.storageModel.find({}) //traigo todo lo que devuelve la consulta
        res.send({ data })
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al obtener los items", 500)
    }
};

const getItem = async (req,res) => {
    try {
        const id = matchedData(req).id;
        const data = await models.storageModel.findById(id) //traigo todo lo que devuelve la consulta
        res.send({ data })
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al obtener el item", 500)
    }
};

const createItem = async(req,res) => {
    try {
        const {body, file} = req;
        const fileData ={
        filename : file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
        const data = await models.storageModel.create(fileData);
        res.send({data});
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al crear el item", 500)
    }
};


const deleteItem = async (req,res) => {
    try {
        const id = matchedData(req).id;
        const data = await models.storageModel.findById(id);
        await models.storageModel.deleteOne({_id : id}) //elimino el reistro en la bbdd
        const { filename } = data ; //destructuring del filename del objeto data
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath); //elimina el archivo físico

        const dataFile ={
            filePath,
            deleted: 1
        }

        res.send({dataFile});

    } catch (error) {
        console.log(error);
        handleErrors.handleHttpError(res,"Error al eliminar el item", 500)
    }
};

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem
}