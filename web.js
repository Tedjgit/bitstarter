var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = fs.readFileSync("index.html");
    response.send(buf.toString());
});

app.get('/3', function(request, response) {
    var buf = fs.readFileSync("bitstarter-hw3.html");
    response.send(buf.toString());
});

app.get('/4', function(request, response) {
    var buf = fs.readFileSync("bitstarter-hw4.html");
    response.send(buf.toString());
});


app.get('/1', function(request, response) {
    response.send("1");
});

app.get('/2', function(request, response) {
    response.send("2");
});

var port = process.env.PORT || 8080; /* used to be 5000 */
app.listen(port, function() {
  console.log("Listening on " + port);
});
