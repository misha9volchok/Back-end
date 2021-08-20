const express = require('express')
const User = require('../models/User')
//const bcrypt = require('bcrypt')
const router = express.Router()

// Get all posts

router.get('/user', async (req, res) => {
  try {
    const user = await User.find().select('Dog')
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// router.post('/user', async (req, res) => {
//   const user = new User({
//     user_name: req.body.user_name,
//     password: req.body.password
//   })

//   await post.save()
//   res.send(post)
// })

router.get('/user/:user_name', async (req, res) => {
  try {
    const user = await User.findOne({ user_name: req.params.user_name }).select(
      'Dog'
    )
    res.send(user)
  } catch {
    res.status(404)
    res.send({ error: "User doesn't exist!" })
  }
})

// Insert Data to dog

router.put('/dog/:user_name', (req, res) => {
  let updates = req.body

  User.findOneAndUpdate({ user_name: req.params.user_name }, updates, {
    new: true
  })
    .then(updatedDog => res.json(updatedDog))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router


