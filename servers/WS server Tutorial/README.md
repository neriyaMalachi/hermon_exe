# WebSocket Terminal Chat (Node.js + ws)

A simple WebSocket-based chat application that runs entirely in the terminal  
(no HTML, no browser).

This project is designed to teach the basics of WebSockets, event-driven
programming, JSON messaging, and terminal input handling in Node.js.

---

## Project Goal

Build a WebSocket server and two terminal clients where:

- Client A can send messages
- Client B can send messages
- Both clients see each other’s messages
- Clients must join first before chatting
- `/quit` cleanly disconnects a client

---

## Project Structure

ws-basic-lab/
├── server.js
├── clientA.js
├── clientB.js
├── package.json
└── node_modules/

yaml
Copy code

---

## Requirements

- Node.js v18+ (recommended)
- npm

---

## Setup

Initialize the project:

```bash
npm init -y
Install WebSocket library:

npm install ws
Enable ES Modules.

In package.json, add:

{
  "type": "module"
}
How to Run
You need three terminals, all opened inside the project folder.

Terminal 1 — Start the Server

node server.js
Expected output:

arduino

ws://localhost:8080
Terminal 2 — Start Client A

node clientA.js
Expected output:

perl

connected
[system] send join first
[system] A joined
>

Terminal 3 — Start Client B

node clientB.js
Expected output:

perl

connected
[system] send join first
[system] B joined
>

Client A will also see:

[system] B joined
Using the Chat
Sending Messages
Type any text and press Enter:

hello
All clients will see:

[A] hello
Quitting the Chat
Type:

/quit
The client disconnects.

Other clients will see:

[system] A left
Message Protocol (JSON)
All communication is done using JSON strings.

Client → Server
Join message:

{ "type": "join", "name": "A" }
Chat message:

{ "type": "msg", "text": "hello" }
Server → Clients
System message:

{ "type": "system", "text": "A joined" }
Chat message:

{ "type": "msg", "from": "A", "text": "hello" }
Key Concepts Learned
What WebSockets are and when to use them

Difference between HTTP and WebSockets

Event-driven programming

Difference between wss (server) and ws (client socket)

JSON serialization (JSON.stringify / JSON.parse)

Buffer to string conversion (toString)

Client state management (join before chat)

Broadcasting messages to multiple clients

Reading terminal input using readline

Common Mistakes
Sending objects without JSON.stringify

Parsing a Buffer without calling .toString()

Sending messages before joining

Forgetting to listen for "message" events

Missing "type": "module" in package.json

Expected Result
Server runs on port 8080

Two terminal clients can chat in real time

Join and leave messages are broadcasted

Invalid input is handled safely

No browser or HTML involved

Possible Extensions
Prevent duplicate usernames

Add /who command

Private messages

Message history

Colored terminal output

Support more than two clients

Summary
This project demonstrates real-time communication using WebSockets and
provides a foundation for building chats, games, and live applications
using Node.js.

Happy coding!


