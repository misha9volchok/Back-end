const User = require('../models/User')

exports.getUser = async (req, res) => {
    try {
      const user = await User.findOne({ user_name: req.params.user_name }).select(
        'Dog'
      )
      res.send(user)
    } catch {
      res.status(404)
      res.send({ error: "User doesn't exist!" })
    }
  }