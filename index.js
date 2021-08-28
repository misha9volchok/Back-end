require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const UserRoutes = require("./route/User")
const BreedsRoutes = require("./route/Breeds")
const UserLoginRoutes = require("./route/User/userLogin")
const UserRegisterRoutes = require("./route/User/userRegister")
const userDogUpdateRoutes = require("./route/User/userDogUpdate")
const userAddNewDogRotues = require("./route/User/userAddNewDog")
const AllergiesRoutes = require("./route/Allergies")


// Connect to mongoDB database

mongoose
.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(() => {
  const app = express()
  app.use(express.json()) // express to handle middleware
  app.use("/", UserRoutes)
  app.use("/", BreedsRoutes)
  app.use("/", AllergiesRoutes)
  app.use("/", UserLoginRoutes)
  app.use("/", UserRegisterRoutes)
  app.use("/",userDogUpdateRoutes)
  app.use("/",userAddNewDogRotues)


  app.listen(80, () => {
    console.log('Server has started!')
  })
})

mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.once('open', ()=> console.log('Conected to Database'))
