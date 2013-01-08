/* 

Simple HTTP Web Server, 
* Starts a web server
* Accepts client connection and returns "Hello World"
--------------------------------
USAGE

Start Server, navigate to code directory in Terminal: 
> node simple_http.js

Open Web Browser and navigate to http://localhost:8000 or http://127.0.0.1:8000

*/

var http = require('http');

// Create a HTTP server on port 8000
// Send plain text headers and 'Hello World' to each client

http.createServer(function (req, res) {
  
	var path = req.url;
	console.log("requested " + path);

	res.writeHead(200, {'Content-Type': 'text/html'}); // prepare response headers
	
	if (path == "/") {
		res.end("Hello World. <a href='/page2'>Page 2</a>\n");

	} else if (path == "/page2") {
		res.end("This is page 2. <a href='/'>Back.</a>\n"); // send response and close connection	
	}
	

}).listen(8000);

// console info message
console.log('Server running at http://127.0.0.1:8000/');