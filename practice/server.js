var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) throw err;
    res.end(data);
  });
}

server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});