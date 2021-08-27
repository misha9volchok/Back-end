const mongoose = require('mongoose')


const schema = mongoose.Schema(
  {
    user_name:{type: String, required: true},
    password: {type: String, required: true, match: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"},
    Email: { type: String, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    Dog: [
      {
        //dogIndex: {type: Number, required: true},
        name: String,
        sex: String,
        weight: String,
        age: Number,
        Breed: 
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
        ,
        allergy: [String],
        vaccines: [
          {
            name: String,
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

