const express = require('express')
const User = require("../models/User") // new
const router = express.Router()

// Get all posts

router.get('/User', async (req, res) => {
    const user = await User.find().select('Dog')
   
    res.send(user)
})

router.post("/User", async (req, res)=>{
    const user = new User({
        user_name: req.body.user_name,
        password: req.body.password,
        Email:req.body.Email,
        Dog:req.body.Dog
    })

    await post.save()
    res.send(post)
})


router.get("/User/:id", async (req, res)=> {
    try {
        const user = await User.findOne({_id: req.params.id})
        res.send(user)
    } catch {
        res.status(404)
        res.send({ error: "User doesn't exist!"})
    }
})
module.exports = router