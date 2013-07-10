var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//    var buf = new Buffer(256);
//    buf.write(fs.readFileSync("./index.html"));
//    response.send(buf.toString());
    var buf = fs.readFileSync("index.html");
	response.send(buf.toString());    
// response.send(fs.readFileSync("./index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});