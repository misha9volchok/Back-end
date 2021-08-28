const Allergies = require("../models/Allergies") 

exports.allergies = async (req, res) => {
    const allergies = await Allergies.find()
   
    res.send(allergies)
}