# HTTP Servers

NodeJS's **HTTP** library can create and server HTTP/WWW servers.

[HTTP library documentation](http://nodejs.org/api/http.html)

Example of a simple web server in NodeJS

	var http = require('http');
	
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	
	console.log('Server running at http://127.0.0.1:1337/');


## Example script

### simple_http.js

Simple HTTP Web Server, 
* Starts a web server
* Accepts client connection and returns "Hello World"

## USAGE

Start Server, navigate to code directory in Terminal: 

	node simple_http.js

Open Web Browser and navigate to http://localhost:8000 or http://127.0.0.1:8000
