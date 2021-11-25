const User = require('../models/User')

exports.dogUpdate = async (req, res) => {
	try {
		const updateDog = await User.findOne({ _id: req.params.id })

    updateDog.Dog[req.query.dogIndex] = req.body

		await updateDog.save()
		res.send(updateDog)
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
} 