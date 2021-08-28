const mongoose = require('mongoose')

const schema = mongoose.Schema({
    Breed: {type: String, required: true},
    Origin: {type: String, required: true},
    BreedGroup: String,
    Size: String,
    Type: String,
    Life: String,
    Temperament: String,
    Height: String,
    Weight: String,
    Hypoallergenic: String,
    Trainability: String,
    Intelligence: String,
},{
        collection: 'Breeds'
})

module.exports = mongoose.model('Breeds', schema)