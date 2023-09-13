const { check } = require('express-validator');
const handleValidator = require('../utils/handleValidators')

const validatorGetItem = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req,res,next) => {
        return handleValidator.validateResults(req,res,next)
    }
]

module.exports = {
    validatorGetItem
}