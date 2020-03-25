const bcrypt = require('bcryptjs');
const User = require('../models/User');

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
  }
};
