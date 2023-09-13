const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracks.controller');
const tracksValidator = require('../validators/tracks.validator');
const authMiddleware = require('../middlewares/session');
const checkRole = require('../middlewares/role')

router.get('/', authMiddleware.sessionMiddleware, tracksController.getItems);
router.get('/:id', authMiddleware.sessionMiddleware,tracksValidator.validatorGetItem, tracksController.getItem);
router.post('/', authMiddleware.sessionMiddleware,checkRole.checkRole(['admin']),tracksValidator.validatorCreateItem , tracksController.createItem);
router.put('/:id', authMiddleware.sessionMiddleware,tracksValidator.validatorGetItem, tracksValidator.validatorCreateItem, tracksController.updateItem);
router.delete('/:id', authMiddleware.sessionMiddleware,tracksValidator.validatorGetItem, tracksController.deleteItem);

module.exports = router;