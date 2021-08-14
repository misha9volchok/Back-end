const mongoose = require('mongoose')

const schema = mongoose.Schema({
    Breed: String,
    Origin: String,
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