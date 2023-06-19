const Sequelize = require('sequelize')
const db = require('../db')

const Urls = db.define('url', {
  Url: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  Post: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Urls