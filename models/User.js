const mongoose = require('mongoose')


const schema = mongoose.Schema(
  {
    user_name:{type: String, required: true},
    password: {type: String, required: true},
    Email: { type: String, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    Dog: [
      {
        //dogIndex: {type: Number, required: true},
        name: {type: String, required: true},
        sex: {type: String, required: true},
        weight: String,
        age: {type: Number, required: true},
        Breed: 
          {
            Name: {type: String, required: true},
            Origin: {type: String, required: true},
            Breeding: {type: String, required: true},
            LifeSpam: [String],
            Height: [String],
            weight: [String],
            HealthIssues: Boolean,
            Trainability: String,
            EasyTraining: Boolean,
            Intelligence: Number
          }
        ,
        allergy: [String],
        vaccines: [
          {
            name: {type: String, required: true},
            date: {type:Date, default: Date.now}
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
    
  },
  {
    collection: 'User'
  }
)


module.exports = mongoose.model('User', schema)

