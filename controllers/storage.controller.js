// El controlador tendrá la lógica de la aplicación. 

const { Long } = require('mongodb');
const models = require('../models/index')
require('dotenv').config();
const PUBLIC_URL = process.env.PUBLIC_URL

// Obtengo la lista de canciones
const getItems = async(req,res) => {
    const data = await models.storageModel.find({}) //traigo todo lo que devuelve la consulta
    res.send({ data })
};

const getItem = (req,res) => {

};

const createItem = async(req,res) => {
    const {body, file} = req;
    const fileData ={
        fielname : file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await models.storageModel.create(fileData);
    res.send({data});
};

const updateItem = (req,res) => {

};

const deleteItem = (req,res) => {

};

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem

}