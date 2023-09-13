const handleErrors = require('../utils/handleErrors');

const checkRole = (roles) => (req,res,next) => {
    try {
        const user = req.user; // luego de autenticar el token se define req.user por eos ya tengo el dato
        const rolesByUser = user.role;
        console.log(rolesByUser);
        const checkValueRole = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); //si el rol que se le pasa a la función checkRole se encuentra dentro del array rolesByUser se devuelve true

        if(!checkValueRole){
            handleErrors.handleHttpError(res,"Rol no autorizado", 403);
            return
        };

        next();
    } catch (error) {
        handleErrors.handleHttpError(res,"Rol no autorizado", 403);
    }
};

module.exports = {
    checkRole
}