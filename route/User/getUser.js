const express = require('express')
const User = require('../../models/User')
//const bcrypt = require('bcrypt')
const router = express.Router()
const GetUserDogInfo = require('../../controllers/getUser')


router.get('/user/:user_name',GetUserDogInfo.getUser)

module.exports = router