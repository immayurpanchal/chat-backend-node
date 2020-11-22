'use strict';
const bcrypt = require('bcrypt');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert('Users', [
			{
				firstName: 'Mayur',
				lastName: 'Panchal',
				email: 'panchal@gmail.com',
				password: bcrypt.hashSync('secret', 10),
			},
			{
				firstName: 'John',
				lastName: 'Doe',
				email: 'john@gmail.com',
				password: bcrypt.hashSync('secret', 10),
			},
			{
				firstName: 'Dinesh',
				lastName: 'Panchal',
				email: 'dinesh@gmail.com',
				password: bcrypt.hashSync('secret', 10),
			},
			{
				firstName: 'Dhruvi',
				lastName: 'Panchal',
				email: 'dhruvi@gmail.com',
				password: bcrypt.hashSync('secret', 10),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('Users', null, {});
	},
};
