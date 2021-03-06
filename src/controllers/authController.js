const User = require('../models').User;
const { where } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/app');

exports.login = async (req, res) => {
	const { email, password } = req.body;

	try {
		// find the user
		const user = await User.findOne({
			[where]: {
				email,
			},
		});
		// check if user found
		if (!user) res.status(404).json({ message: 'User not found' });
		// check if password matches
		if (!bcrypt.compareSync(password, user.password)) {
			res.status(401).json({ message: 'Incorrect Password' });
		}
		// generate auth token
		const userWithToken = generateToken(user.get({ raw: true }));

		return res.send(userWithToken);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.register = async (req, res) => {
	try {
		const user = await User.create(req.body);

		// generate auth token
		const userWithToken = generateToken(user.get({ raw: true }));

		return res.send(userWithToken);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const generateToken = (user) => {
	// delete user.password;

	const token = jwt.sign(user, config.appKey, { expiresIn: 86400 });

	return { ...user, ...{ token } };
};
