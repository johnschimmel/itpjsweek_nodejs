
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  
  //  templates directory
  app.set('views', __dirname + '/views');

  // setup template engine - we're using Hogan-Express
  // https://github.com/vol4ok/hogan-express
  app.set('view engine', 'html');
  app.set('layout','layout');
  app.engine('html', require('hogan-express'));


  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  // app.use(app.router);
  
  // css, images and js
  app.use(express.static(path.join(__dirname, 'public')));

});


app.configure('development', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res) {
  
  var templateData = {
    name : 'Tony Pony',
    title : 'ExpressJS Demo'
  }
  
  res.render('index', templateData);

});

app.get('/page2', function(req, res) {
  res.send("this is page 2");
});

// Start the Server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
