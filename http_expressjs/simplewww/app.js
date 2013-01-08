
/**
 * Module dependencies.
 */

var express = require('express');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get('/form', function(req, res) {

	form = "<form method='POST'><input type='text' name='mydata' placeholder='Enter some text'><input type='submit'></form>"
	res.send(form);

});

app.post('/form', function(req, res){

	console.log("form submission");
	console.log(req.body.mydata); // form data pass in req.body 

	res.send("Thanks for this: <b>" + req.body.mydata + "<b>");

	
});

//app.get('/users', user.list);

app.listen(app.get('port'));
console.log("Server started on port "+ app.get('port'));
