const express = require('express')
const Allergies = require("../models/Allergies") 
const router = express.Router()


//get all breeds
router.get('/allergies', async (req, res) => {
    const allergies = await Allergies.find()
   
    res.send(allergies)
})

//get breed by name
router.get('/allergies/:allergy', async (req, res)=> {
    try {
        const allergy  = await Allergies.findOne({allergy: req.params.allergy})
        res.send(allergy)
    } catch {
        res.status(401)
        res.send({ error: "No allergy found!"})
    }
})

module.exports = router