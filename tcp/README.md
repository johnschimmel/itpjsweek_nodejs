# TCP Servers

NodeJS's **NET** library can create and connect to TCP servers.

[NET library documentation](http://nodejs.org/api/net.html)

The **NET** library is very event driven, 'connect','data','end' are triggered as clients of the server connect, send data and disconnect. 

## Example scripts

### tcp_echo.js

Simple TCP Echo server, 
* Basic 'connect', 'data' and 'end' events
* Client message is echoed back

--------------------------------
USAGE

Start Server, navigate to code directory in Terminal: 
	
	node tcp_echo.js

In another new Terminal window, connect to TCP Echo server
	
	telnet localhost 5000

Enter a message in the connected Terminal window and hit return key.

### chat_server.js

Simple TCP chat server, 
* manages clients in an array.
* broadcasts messages to everyone in room.

by: creationix, https://gist.github.com/creationix
gist: chatServer.js
url: https://gist.github.com/707146

--------------------------------
USAGE

Start Server, navigate to code directory in Terminal: 

	node chat_server.js

Add first chat client. Open new Terminal window, connec to TCP Chat

	telnet localhost 5000

Enter a message and hit return key

Add second chat client. Open another Terminal window and connect to same address

	telnet localhost 5000 
