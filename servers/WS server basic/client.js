import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("connected");
  for (let index = 0; index < 9; index++) {
    ws.send("hello server");
  }
});
ws.on("message", (data) => {
  console.log("from server", data.toString());
});
