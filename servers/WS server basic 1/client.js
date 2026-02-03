import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8000");

ws.on("open", () => {
  ws.send("hello");
});

ws.on("message", (msg) => {
  console.log("message from server", msg.toString());
});
