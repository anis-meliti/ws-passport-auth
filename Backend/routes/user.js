const express = require('express');

const userController = require('../controllers/user.Controller');
const { registerRules, validator } = require('../middlewares/validator');
const isAuth = require('../middlewares/passport-setup');
const Router = express.Router();

Router.post('/register', registerRules(), validator, userController.register);
Router.post('/login', userController.login);
Router.get('/current', isAuth(), (req, res) => res.json({ user: req.user }));

module.exports = Router;
