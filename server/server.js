const bodyParser = require('body-parser');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5000; //Line 3
const db = require('../server/db/db')
const User = require('../server/models/Users')

//body parser
app.unsubscribe(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11


// This displays message that the server running and listening to specified port

const init = async () => {
  db.authenticate()
  .then(()=> console.log('Connected to chrome extension database...'))
  .catch(err => console.log(err))

  await db.sync({
    force: true
  })

  const users = await Promise.all([
    User.create({ Username: 'cody', Password: '123', }),
    User.create({ Username: 'murphy', Password: 'fsfesefe'}),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded dbsuccessfully`)
  const currentUsers = await User.findAll()
  console.log(currentUsers)
  
    // start listening (and create a 'server' object representing our server)
  app.listen(port, () => console.log(`Listening on port 5000 in server.js`))
}
init()

