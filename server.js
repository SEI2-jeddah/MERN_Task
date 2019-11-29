var express = require('express')
var cors = require('cors')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
app.use(cors())


const mongoURI = 'mongodb://localhost:27017/mernloginreg'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
