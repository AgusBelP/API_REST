const {check} = require('express-validator')
const handleValidator = require('../utils/handleValidators')

const validatorRegister = [
    check('name')
    .exists()
    .notEmpty()
    .isLength({min: 3, max: 40}),
    check('age')
    .exists()
    .notEmpty()
    .isInt({min: 8, max:99}),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min: 3, max: 15}),
    (req,res,next) => {
        return handleValidator.validateResults(req,res,next)
    }
];

const validatorLogin = [
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min: 3, max: 15}),
    (req,res,next) => {
        return handleValidator.validateResults(req,res,next)
    }
];

module.exports = { 
    validatorRegister,
    validatorLogin
}

