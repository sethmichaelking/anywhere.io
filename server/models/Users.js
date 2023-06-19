const Sequelize = require('sequelize')
const db = require('../db')

const Users = db.define('user', {
  Username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  Password: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Users