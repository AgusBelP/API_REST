// El controlador tendrá la lógica de la aplicación. 

const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const handleErrors = require('../utils/handleErrors')

// Obtengo la lista de canciones
const getItems = async(req,res) => {
    try {
        const user = req.user;
        const data = await tracksModel.find({}) //traigo todo lo que devuelve la consulta
        res.send({ data, user})
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al obtener los items", 500)
    }
};

const getItem = async(req,res) => {
    try {
        req = matchedData(req)
        const id = req.id
        const data = await tracksModel.findById(id) //traigo todo lo que devuelve la consulta
        res.send({ data })
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al obtener el item", 403)
    }
};

const createItem = async(req,res) => {
    try {
        const body =  matchedData(req); // esta función devuelve un objeto cuya información es únicamente aquella que matchea con las validaciones que se especificaron en el validador
        const data = await tracksModel.create(body) 
        res.send({ data });
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al crear el item", 403)
    }
    

};

const updateItem = async (req,res) => {
    try {
        const {id, ...body} = matchedData(req) //obtengo dos objetos, uno es el id y el otro es todo el resto del body y esos objetos se llaman id y body
        const data = await tracksModel.findOneAndUpdate(
            id, body
        ) 
        res.send({ data });
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al actualizar el item", 403)
    }

};

const deleteItem = async (req,res) => {
    try {
        req = matchedData(req)
        const id = req.id
        const data = await tracksModel.deleteOne({_id: id}) //traigo todo lo que devuelve la consulta
        res.send({ data })
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al eliminar el item", 403)
    }
};

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem

}