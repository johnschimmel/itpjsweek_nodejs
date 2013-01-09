# Getting Started with NodeJS

## "JavaScript servers? That's crazy."

![Back to School movie poster with Rodney Dangerfield](http://ia.media-imdb.com/images/M/MV5BMTYxMTIyOTM1MF5BMl5BanBnXkFtZTcwNzQ0MTcyNA@@._V1._SX320_SY970_.jpg)

### A kind of re-birth

NodeJS joins the other popular web languages like Python, Ruby and PHP. It can access file systems, create and connect to servers, serve HTML, JSON and XML and manage user sessions.

NodeJS has the added benefit of JavaScript's asynchronous function execution. 

## The Good Parts

* JavaScript language
	* Asynchronous
	* JSON, JavaScript Objects
	* Fun to write
* Growing community
* Very Web ready
* Servers of past, present and future
	* TCP
		* HTTP
			* Websocket

## Install NodeJS

Node is available for lots of different platforms including OSX, get a copy here [http://nodejs.org/download/](http://nodejs.org/download/).

## NPM - Node Package Manager

NPM is one of the nicest package managers. Using a **package.json** file you can declare an app's dependencies.

NPM is included when you download and install NodeJS. [NPMJS.org](https://npmjs.org/) is the official site for the application.

## Node API 

[Node API](http://nodejs.org/api/)

## NodeJS Hosting

* [Heroku](http://www.heroku.com) - great service. Git deployment. No websockets yet, only long polling.
* [Nodejitsu](http://nodejitsu.com) - NodeJS hosting and Websocket support
* Any VPS server where you are allowed to run scripts as root, EC2, Linode, etc.

## other tools

* Nodemon - [https://github.com/remy/nodemon](https://github.com/remy/nodemon) - auto restart node script when you are developing 
* Forever - [https://github.com/nodejitsu/forever](https://github.com/nodejitsu/forever) - a process manager for Node. Use Forever to start a Node script then close the terminal window. With Forever you can come back to your shell and use the Forever command line to view, stop or restart the running Node scripts.