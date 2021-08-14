const express = require('express')
const mongoose = require('mongoose')
const routes = require("./route/routes") 
const UserRoutes = require("./route/User")

// Connect to mongoDB database

mongoose
.connect("mongodb+srv://dbadmin:Lolypop79!@node-rest-shop.tqp5k.mongodb.net/DogDB?retryWrites=true&w=majority")
.then(() => {
  const app = express()
  app.use(express.json()) // express to handle middleware
  app.use("/", routes) 
  app.use("/", UserRoutes)

  app.listen(5000, () => {
    console.log('Server has started!')
  })
})
