const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const storageController = require('../controllers/storage.controller')

router.post('/', uploadMiddleware.single("myfile") , storageController.createItem );

module.exports = router