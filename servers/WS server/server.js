import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
console.log(" WS server running on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log(" client connected");

  ws.on("message", (buf) => {
    let msg;
    try {
      msg = JSON.parse(buf.toString());
    } catch {
      ws.send(JSON.stringify({ ok: false, message: "Invalid JSON" }));
      return;
    }

    if (msg.type !== "menu" || typeof msg.choice !== "number") {
      ws.send(JSON.stringify({ ok: false, message: "Bad payload" }));
      return;
    }

    const c = msg.choice;
    let reply;

    switch (c) {
      case 1:
        reply = " Option 1: Hello from server!";
        console.log("get from client msg: ", msg);

        break;
      case 2:
        reply = ` Option 2: Server time is ${new Date().toLocaleString()}`;
        console.log("get from client msg: ", msg);

        break;
      case 3:
        reply = " Option 3: You chose 3 (demo response).";
        console.log("get from client msg: ", msg);

        break;
      case 4:
        reply = " Option 4: Here is some data: {a:1, b:2}";
        console.log("get from client msg: ", msg);

        break;
      case 5:
        reply = " Option 5: Server received your request successfully.";
        console.log("get from client msg: ", msg);

        break;
      case 6:
        reply = " Option 6: Bye! Closing connection.";
        ws.send(JSON.stringify({ ok: true, message: reply, close: true }));
        ws.close();
        return;
      default:
        reply = " Invalid choice. Please pick 1-6.";
    }

    ws.send(JSON.stringify({ ok: true, message: reply }));
  });

  ws.on("close", () => console.log(" client disconnected"));
});
