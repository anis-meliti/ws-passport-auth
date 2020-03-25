const express = express();

const userController = require('../controllers/user.Controller');
const Router = express.Router();

Router.post('/register', userController);

module.exports = Router;
