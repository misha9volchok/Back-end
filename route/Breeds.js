const express = require('express')
const Breeds = require("../models/Breeds") 
const router = express.Router()


//get all breeds
router.get('/breeds', async (req, res) => {
    const breeds = await Breeds.find()
   
    res.send(breeds)
})

//get breed by name
router.get('/breeds/:Breed', async (req, res)=> {
    try {
        const breed = await Breeds.findOne({Breed: req.params.Breed})
        res.send(breed)
    } catch {
        res.status(401)
        res.send({ error: "No breed found!"})
    }
})

module.exports = router