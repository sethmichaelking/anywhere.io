//access point for all things database related

const db = require('./db')

const Posts = require('./models/Posts')
const Urls = require('./models/Urls')
const Users = require('./models/Users')

//associations could go here

module.exports = {
  db,
  models: {
    Posts,
    Urls,
    Users
  }
}
