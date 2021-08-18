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

router.get('/user/:user_name', async (req, res) => {
  try {
    const user = await User.findOne({ user_name: req.params.user_name }).select('Dog')
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

// ###### LOGIN ###### //

router.post('/login', function(req, res) {
    const user_name  = req.body.user_name;
    const password = req.body.password;

    User.findOne({user_name: user_name, password:password}, function(err, user){
        if(err) {
            console.log(err);
            return res.status(500).send({error: "send request error"});
        }

        if (!user) {
            return res.status(404).send({error: "User doest not exist"});
        }

        return res.status(200).json({user_name:user_name});
    })


})

// Insert Data to dog

router.put("/dog/:user_name", (req, res) =>{
  let updates = req.body 

  User.findOneAndUpdate({user_name: req.params.user_name}, updates, {new: true})
  .then(updatedDog => res.json(updatedDog))
  .catch(err => res.status(400).json("Error: " + err))

})




module.exports = router
