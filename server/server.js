const bodyParser = require('body-parser');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 5000; //Line 3
const db = require('../server/db/db')
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
