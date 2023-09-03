// El controlador tendrá la lógica de la aplicación. 

const { Long } = require('mongodb');
const models = require('../models/index')

// Obtengo la lista de canciones
const getItems = async(req,res) => {
    const data = await models.tracksModel.find({}) //traigo todo lo que devuelve la consulta
    res.send({ data })
};

const getItem = (req,res) => {

};

const createItem = async(req,res) => {
    const body = req.body;
    console.log(body);
    const data = await models.tracksModel.create(body)
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