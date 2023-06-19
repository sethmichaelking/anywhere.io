const bodyParser = require('body-parser');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5000; //Line 3
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chrome_extension', 'seth', 'Poiop90lik8!', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
    logging: false
  })

sequelize.authenticate()
  .then(()=> console.log('database connected'))
  .catch(err => console.log(err))
// const {Client} = require('pg')
// const client = new Client({
//     host: "localhost",
//     user: "seth",
//     port: 5433,
//     password: 'Poiop90lik8!',
//     database: 'chrome_extension'
// })

// client.connect()

// client.query('SELECT * FROM users', (err, res) => {
//     if (!err){
//         console.log(res.rows)
//     } else {
//         console.log(err.message)
//     }
// })

//body parser
app.unsubscribe(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port 5000`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11