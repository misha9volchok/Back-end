const User = require('../models/User')

exports.register = async (req, res) => {
    // Check email not registered
    await User.findOne({ Email: req.body.Email }).then(user => {
      if (user) {
        // return 400 if email exists
        return res.status(400).json({ Email: 'Alredy exists' })
      } else {
        // Create new User
        const newUser = new User({
          user_name: req.body.user_name,
          password: req.body.password,
          Email: req.body.Email, 
          Dog: {dogIndex: 0,name: "", sex:"", age: 0}
        })
        newUser.save()
        return res.status(200).json({ msg: newUser })
      }
    })
  }