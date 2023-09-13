const express = require('express');
const router = express.Router();
const authValidator = require('../validators/auth.validator');
const authController = require('../controllers/auth.controller')


router.post('/register',authValidator.validatorRegister, authController.registerController);
router.post('/login',authValidator.validatorLogin, authController.loginController);

module.exports = router