'use strict'
const functions = require('../config/functions')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Likes',
      Array.from({ length: 25 }).map((item, index) => ({
        id: index + 1,
        UserId: Math.ceil(Math.random() * 10),
        TweetId: Math.ceil(Math.random() * 100),
        createdAt: functions.randomDate(new Date(2021, 0, 1), new Date()),
        updatedAt: functions.randomDate(new Date(2021, 0, 1), new Date())
      })
      ), {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Likes', null, {})
  }
}
