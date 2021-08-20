require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require("./route/routes") 
const UserRoutes = require("./route/User")
const BreedsRoutes = require("./route/Breeds")
const UserLoginRoutes = require("./route/User/userLogin")
const UserRegisterRoutes = require("./route/User/userRegister")
//const FoodRoutes = require("./route/Food")
const AllergiesRoutes = require("./route/Allergies")
//const VaccinesRoutes = require("./route/Vaccines")

// Connect to mongoDB database

mongoose
.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(() => {
  const app = express()
  app.use(express.json()) // express to handle middleware
  app.use("/", routes) 
  app.use("/", UserRoutes)
  app.use("/", BreedsRoutes)
  //app.use("/", FoodRoutes)
  app.use("/", AllergiesRoutes)
  app.use("/", UserLoginRoutes)
  app.use("/", UserRegisterRoutes)
 // app.use("/", VaccinesRoutes)

  app.listen(80, () => {
    console.log('Server has started!')
  })
})

mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.once('open', ()=> console.log('Conected to Database'))
