const express = require('express')
const User = require('../../models/User')
//const bcrypt = require('bcrypt')
const router = express.Router()
const dogUpdateController = require('../../controllers/dogUpdate')

router.patch("/dogUpdate/:id", dogUpdateController.dogUpdate)

module.exports = router
