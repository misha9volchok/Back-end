const express = require('express')
const Breeds = require("../models/Breeds") 
const router = express.Router()
const getAllBreedsController = require('../controllers/breeds')


//get all breeds
router.get('/all_breeds', getAllBreedsController.getBreeds)

//get breed by name
router.get('/breeds', async (req, res)=> {
    try {
        const a = req.query.Breed;
        console.log(a);
        const breed = await Breeds.findOne({Breed: a})
        console.log(breed);
        res.send(breed)
    } catch {
        res.status(401)
        res.send({ error: "No breed found!"})
    }
})

module.exports = router