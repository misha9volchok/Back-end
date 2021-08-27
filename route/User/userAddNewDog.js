const express = require('express')
const User = require('../../models/User')
//const bcrypt = require('bcrypt')
const router = express.Router()
const AddNewDogController = require('../../controllers/addNewDog')

router.patch('/addDog/:id', AddNewDogController.addNewDog)






module.exports = router