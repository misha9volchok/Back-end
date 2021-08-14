const express = require('express')
const mongoose = require('mongoose')
const routes = require("./route/routes") 
const UserRoutes = require("./route/User")
const BreedsRoutes = require("./route/Breeds")
//const FoodRoutes = require("./route/Food")
const AllergiesRoutes = require("./route/Allergies")
//const VaccinesRoutes = require("./route/Vaccines")

// Connect to mongoDB database

mongoose
.connect("mongodb+srv://dbadmin:Lolypop79!@node-rest-shop.tqp5k.mongodb.net/DogDB?retryWrites=true&w=majority")
.then(() => {
  const app = express()
  app.use(express.json()) // express to handle middleware
  app.use("/", routes) 
  app.use("/", UserRoutes)
  app.use("/", BreedsRoutes)
  //app.use("/", FoodRoutes)
  app.use("/", AllergiesRoutes)
 // app.use("/", VaccinesRoutes)

  app.listen(80, () => {
    console.log('Server has started!')
  })
})
