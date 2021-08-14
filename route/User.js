const express = require('express')
const User = require('../models/User')
//const bcrypt = require('bcrypt')
const router = express.Router()

// Get all posts

router.get('/user', async (req, res) => {
  const user = await User.find().select('Dog')

  res.send(user)
})

router.post('/user', async (req, res) => {
  const user = new User({
    user_name: req.body.user_name,
    password: req.body.password
  })

  await post.save()
  res.send(post)
})

router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })
    res.send(user)
  } catch {
    res.status(404)
    res.send({ error: "User doesn't exist!" })
  }
})
// ##### CREATE NEW USER ##### //

router.post('/register', async (req, res) => {
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
        Email: req.body.Email
      })
      newUser.save()
      return res.status(200).json({ msg: newUser })
    }
  })
})

module.exports = router
