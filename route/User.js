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
