const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracks.controller')

router.get('/', tracksController.getItems);
router.get('/:id', tracksController.getItem);
router.post('/', tracksController.createItem);

module.exports = router;