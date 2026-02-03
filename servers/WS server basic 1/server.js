import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (ws) => {
  console.log("connection");

  ws.on("message", (msg) => {
    console.log(msg.toString());
    ws.send(msg.toString());
  });

  ws.on("close", () => {
    console.log("disconnection");
  });
});
