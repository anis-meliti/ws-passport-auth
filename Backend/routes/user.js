const express = require('express');

const userController = require('../controllers/user.Controller');
const Router = express.Router();

Router.post('/register', userController.register);

module.exports = Router;
