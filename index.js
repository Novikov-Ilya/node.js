const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile('/CDP/FrontCamp/7 node.js/app/news.json');
});

app.get('/id75', function(req, res) {
  res.sendFile('/CDP/FrontCamp/7 node.js/app/news75.json');
});

app.post('/', function(req, res) {
  res.send('POST request to root directory');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});