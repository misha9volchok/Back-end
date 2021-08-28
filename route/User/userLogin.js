const express = require('express')
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const LoginController = require('../../controllers/login')
const router = express.Router()

// ###### LOGIN ###### //

router.post('/login', LoginController.login)

module.exports = router