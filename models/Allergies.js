const mongoose = require('mongoose')

const schema = mongoose.Schema({
    allergy: String,
},{
        collection: 'Allergies'
})

module.exports = mongoose.model('Allergies', schema)