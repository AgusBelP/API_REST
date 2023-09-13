const handleErrors = require('../utils/handleErrors');
const handleJwt = require('../utils/handleJwt');
const { usersModel } = require('../models');

const sessionMiddleware = async (req,res,next) => {
    try {
        if(!req.headers.authorization){
            handleErrors.handleHttpError(res,"NO_TOKEN", 401);
            return
        };

        const token = req.headers.authorization.split(' ')[1];
        const dataToken = await handleJwt.verifyToken(token);

        if(!dataToken._id){
            handleErrors.handleHttpError(res,"Error al verificar el usuario", 401);
            return
        };

        const user = await usersModel.findById(dataToken._id).select('name email role');
        req.user = user

        next();

    } catch (error) {
        handleErrors.handleHttpError(res,"Usuario no logueado", 401);

    }
};

module.exports = {
    sessionMiddleware
}