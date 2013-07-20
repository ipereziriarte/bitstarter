var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var body = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(body.toString());
});

var port = process.env.PORT || 8090;
app.listen(port, function() {
  console.log("Listening on " + port);
});