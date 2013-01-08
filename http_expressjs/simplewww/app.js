/* 

Simple ExpressJS example
* Starts a web server
* Accepts client connection and returns "Hello World"
--------------------------------
USAGE

First time running the code, navigate to the code directory in Terminal. Install all dependencies.
> npm install

Start Server, navigate to code directory in Terminal: 
> node app.js

Open Web Browser and navigate to http://localhost:3000 or http://127.0.0.1:3000

Available urls '/'  &  '/form'

*/

var express = require('express');

var app = express();

// ExpressJS configuration
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

app.configure('development', function(){
  app.use(express.errorHandler());
});
// end ExpressJS config


// display the main / index page
app.get('/', function(req, res) {
  res.send("<h1>Hello World</h1>");
});

// display a simple form
app.get('/form', function(req, res) {

	form = "<form method='POST'><input type='text' name='mydata' placeholder='Enter some text'><input type='submit'></form>"
	res.send(form);

});

// POST request to /form 
// accepts a form submission receives form field 'mydata' displays it to browser
app.post('/form', function(req, res){

	console.log("form submission");
	console.log(req.body.mydata); // form data pass in req.body 

	res.send("Thanks for submitting, you said, <b>" + req.body.mydata + "<b>");

	
});

// start the server!
app.listen(app.get('port'));
console.log("Server started on port "+ app.get('port'));
