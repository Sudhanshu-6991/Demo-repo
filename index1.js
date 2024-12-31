const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send("This is the response from the server!!")
})

app.get('/GetResponse', function(req, res){
  //let ans = 732
  res.sendStatus(732);
})

  app.listen(3000);