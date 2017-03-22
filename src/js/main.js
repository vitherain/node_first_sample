var http = require("http");

http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello fuckin\' world!');
}).listen(8999);

console.log("Server running on http://localhost:8999/");