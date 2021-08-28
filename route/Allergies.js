const express = require('express')
const Allergies = require("../models/Allergies") 
const router = express.Router()
const getAllegries = require('../../controllers/allegries')


//get all breeds
router.get('/allergies',getAllegries.allergies)

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