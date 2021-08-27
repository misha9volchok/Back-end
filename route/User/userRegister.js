const express = require('express')
const User = require('../../models/User')
//const bcrypt = require('bcrypt')
const RegisterController = require('../../controllers/register')
const router = express.Router()

// ##### CREATE NEW USER ##### //

router.post('/register', RegisterController.register)

module.exports = router