const Breeds = require("../models/Breeds") 

exports.getBreeds = async (req, res) => {
    const breeds = await Breeds.find()
   
    res.send(breeds)
}