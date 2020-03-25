const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');

const secretOrKey = config.get('secretOrKey');
module.exports = userController = {
  register: async (req, res) => {
    const { email, name, password, phoneNumber } = req.body;
    try {
      const searchRes = await User.findOne({ email });
      if (searchRes)
        return res.status(400).json({ errors: 'user already exits !' });
      const newUser = new User({
        email,
        name,
        password,
        phoneNumber
      });
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) throw err;
          try {
            newUser.password = hash;
            const addResult = await newUser.save();
            res.status(201).json(addResult);
          } catch (error) {
            res.status(500).json({ errors: error });
          }
        });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const searchResult = await User.findOne({ email });
      if (!searchResult)
        return res.status(400).json({ errors: 'Bad credentials !' });
      const isMatch = await bcrypt.compare(password, searchResult.password);
      if (!isMatch)
        return res.status(400).json({ errors: 'Bad credentials !' });
      const paylaod = {
        id: searchResult._id,
        name: searchResult.name,
        email: searchResult.email,
        phoneNumber: searchResult.phoneNumber
      };
      jwt.sign(paylaod, secretOrKey, (err, token) => {
        if (err) throw err;
        res.json({ token: `Bearer ${token}` });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  }
};
