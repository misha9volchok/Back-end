const User = require('../models/User')
const Dog = require('../models/Dog')
const bcrypt = require('bcrypt')
const mongoose = require("mongoose");

exports.register = async (req, res) => {
  // Check email not registered
  await User.findOne({ Email: req.body.Email }).then(user => {
    if (user) {
      // return 400 if email exists
      return res.status(400).json({ Email: 'Alredy exists' })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          })
        } else {
          const newUser = new User({
            user_name: req.body.user_name,
            password: hash,
            Email: req.body.Email,
            Dog: { dogIndex: 0, name: '', sex: '', age: 0 }
          })
          newUser.save()
          return res.status(200).json({ msg: newUser })
        }
      })
    }
  })
}

