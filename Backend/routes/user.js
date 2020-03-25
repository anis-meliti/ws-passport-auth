const express = require('express');

const userController = require('../controllers/user.Controller');
const { registerRules, validator } = require('../middlewares/validator');
const Router = express.Router();

Router.post('/register', registerRules(), validator, userController.register);

module.exports = Router;
