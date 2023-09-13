const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const storageController = require('../controllers/storage.controller')
const storageValidator = require('../validators/storage.validator')

router.post('/', uploadMiddleware.single("myfile") , storageController.createItem );
router.get('/', storageController.getItems );
router.get('/:id', storageValidator.validatorGetItem,storageController.getItem );
router.delete('/:id', storageValidator.validatorGetItem,storageController.deleteItem );

module.exports = router