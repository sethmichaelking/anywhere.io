const Sequelize = require('sequelize')
const db = require('../db')

const Posts = db.define('post', {
  CreateTimestamp: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  UpdateTimestamp: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  CreatorUserId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  ContentString: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Headline
