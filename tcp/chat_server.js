/* 

Simple TCP chat server, 
* manages clients in an array.
* broadcasts messages to everyone in room.

by: creationix, https://gist.github.com/creationix
gist: chatServer.js
url: https://gist.github.com/707146

--------------------------------
USAGE

Start Server, navigate to code directory in Terminal: 
> node chat_server.js

Add first chat client. Open new Terminal window, connec to TCP Chat
> telnet localhost 5000

Enter a message and hit return key

Add second chat client. Open another Terminal window and connect to same address
> telnet localhost 5000 

*/

// Load the TCP Library
net = require('net');

// Keep track of the chat clients
var clients = [];

// Start a TCP Server
net.createServer(function (socket) {

  /******* Initial process for every connecting client/socket *******/

  // Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort 

  // Put this new client in the list/array
  clients.push(socket);

  // Send a nice welcome message and announce
  socket.write("Welcome " + socket.name + "\n");
  broadcast(socket.name + " joined the chat\n", socket);

  /******* End initial process *******/


  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    broadcast(socket.name + "> " + data, socket);
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + " left the chat.\n");
  });
  
  
  // Send a message to all clients
  function broadcast(message, sender) {
    clients.forEach(function (client) {
      // Don't want to send it to sender
      if (client === sender) return;
      client.write(message);
    });
    // Log it to the server output too
    process.stdout.write(message)
  }

}).listen(5000); // start server on port number 5000

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 5000\n");