# Simple ExpressJS example

## What it is

ExpressJS is a microframework for NodeJS. It is very similiar to Ruby's Sinatra and Python's Flask. Express can help you get a basic HTTP web server running but also make organizing your code and design with templates, manage user sessions, connect to databases and provide authentication. 

While ExpressJS does not do everything, it is great for the small apps that need very basic functionality. 


ExpressJS website - [http://expressjs.com/](http://expressjs.com/)

### Package.json

The **package.json** file defines the name of our NodeJS app and any dependencies that are needed. 

**package.json**

	{
	  "name": "simplewww-example",
	  "version": "0.0.1",
	  "dependencies": {
	    "express": "3.0.0rc5"
	  }
	}

## USAGE

### First things first

First time running the code you need to install the required modules that are defined in **package.json**. Navigate to the code directory in Terminal. Install all dependencies by running the following command.
	
	npm install

You only need to run this code once, every time you update **package.json**.

### Start the server

Navigate to code directory in Terminal: 
	
	node app.js

If successful, your Terminal window will read... 

> Server started on port 3000

### View the webpages

Open Web Browser and navigate to [http://localhost:3000](http://localhost:3000)

Available URLs 

* [http://localhost:3000/](http://localhost:3000)
* [http://localhost:3000/form](http://localhost:3000/form)


### Stopping the server (CTRL+C)

You must manually stop the NodeJS in the Terminal window that is running the script. 

If the Terminal window, stop the script with **CTRL+C**
