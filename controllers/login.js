const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')


exports.login = (req, res) => {
  const user_name = req.query.user_name
  const password = req.query.password

  User.findOne({ user_name: user_name}, function (
    err,
    user
  ) {
    // password encription module
    bcrypt.compare(req.query.password, password, (err, result) => {
      if (err) {
        console.log(err)
        return res.status(500).send({ error: 'send request error' })
      }

      if (!user) {
        return res.status(400).send({ error: 'User doest not exist' })
      }

      return res.status(200).json({ user_name: user_name })
    })
  })
}
