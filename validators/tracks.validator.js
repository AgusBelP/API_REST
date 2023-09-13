const { check } = require('express-validator');
const handleValidator = require('../utils/handleValidators')

const validatorCreateItem = [
    check('name')
        .exists()
        .notEmpty()
        .isLength({min:5, max:20}),
    check('album')
        .exists()
        .notEmpty(),
    check('cover')
        .exists()
        .notEmpty(),
    check('artist.name')
        .exists()
        .notEmpty(),
    check('artist.nickname')
        .exists()
        .notEmpty(),
    check('artist.nationality')
        .exists()
        .notEmpty(),
    check('duration.start')
        .exists()
        .notEmpty(),
    check('duration.end')
        .exists()
        .notEmpty(),
    (req, res, next) =>{
        return handleValidator.validateResults(req, res, next)
    }
    
]

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
    validatorCreateItem,
    validatorGetItem
}