const mongoose = require('mongoose')

const schema = mongoose.Schema({
  user_name: String,
  password: String,
  Email: String,
  Dog: [
    {
      name: String,
      sex: String,
      weight: String,
      age: Number,
      Breed: [
        {
          Name: String,
          Origin: String,
          Breeding: String,
          LifeSpam: [String],
          Height: [String],
          weight: [String],
          HealthIssues: Boolean,
          Trainability: String,
          EasyTraining: Boolean,
          Intelligence: Number
        }
      ],
      allergy: [String],
      vaccines: [
        {
          name: String,
          date: Date
        }
      ],
      food: [
        {
          food_name: String,
          ingredient_list: [String],
          food_amount_grams: Number,
          calories_grams: Number
        }
      ]
    }]
},{
    collection: 'User'
})

module.exports = mongoose.model('User', schema)
