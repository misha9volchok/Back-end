const User = require('../models/User')

exports.login = (req, res) => {
    const user_name = req.body.user_name
    const password = req.body.password
  
    User.findOne({ user_name: user_name, password: password }, function (
      err,
      user
    ) {
      if (err) {
        console.log(err)
        return res.status(500).send({ error: 'send request error' })
      }
  
      if (!user) {
        return res.status(400).send({ error: 'User doest not exist' })
      }
  
      return res.status(200).json({ user_name: user_name })
    })
  }