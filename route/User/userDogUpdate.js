const express = require('express')
const User = require('../../models/User')
//const bcrypt = require('bcrypt')
const router = express.Router()

router.patch("/dogUpdate/:id", async (req, res) => {
	try {
		const updateDog = await User.findOne({ _id: req.params.id })

    updateDog.Dog[req.body.dogIndex] = req.body

		await updateDog.save()
		res.send(updateDog)
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})

module.exports = router
