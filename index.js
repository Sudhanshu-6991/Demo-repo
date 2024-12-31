const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/asd', function (req, res) {
  res.send('Hello World 22')
})

app.listen(3000)