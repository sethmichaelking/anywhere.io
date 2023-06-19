const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.REACT_DATABASE_NAME, process.env.REACT_DATABASE_USER, process.env.REACT_DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
    logging: false
  })

db.authenticate()
  .then(()=> console.log('Connected to chrome extension database...'))
  .catch(err => console.log(err))

module.exports = db