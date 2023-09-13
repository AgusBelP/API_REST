const { matchedData } = require('express-validator');
const handlePassword = require('../utils/handlePassword');
const { usersModel } = require('../models');
const handleJwt = require('../utils/handleJwt');
const handleErrors = require('../utils/handleErrors');
const { compare } = require('bcryptjs');

const registerController = async (req,res) => {
    req = matchedData(req);
    const password = await handlePassword.encrypt(req.password);
    const body = {...req, password};
    const dataUser = await usersModel.create(body); //crea el usuario en la bbdd
    dataUser.set('password' , undefined, {strict:false}) // seteo el valor en undefined para la password asi no se ve por consola la clave pero el objeto se guarda OK en la bbdd - array.set()

    const data = {
        token: await handleJwt.tokenSign(dataUser),
        user : dataUser
    };

    res.send({ data });
};

const loginController = async (req,res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({email : req.email}).select('name email password role');
        
        if(!user){
            handleErrors.handleHttpError(res,"Credenciales incorrectas", 401);
            return
        }

        const hashPassword = user.password;
        
        const check = await compare(req.password ,hashPassword);

        if(!check){
            handleErrors.handleHttpError(res,"Credenciales incorrectas", 401);
        }

        const data = {
            token: await handleJwt.tokenSign(user),

            message: "Login exitoso"
        }

        res.send({data})
        
    } catch (error) {
        handleErrors.handleHttpError(res,"Error al verificar el usuario", 500)
    }
}

module.exports = {
    registerController,
    loginController
}