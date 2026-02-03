import WebSocket from "ws";
import readline from "readline";

const ws = new WebSocket("ws://localhost:8080");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function send(obj) {
  ws.send(JSON.stringify(obj));
}

ws.on("open", () => {
  console.log("connected");
  // Step 4.2 join
  send({ type: "join", name: "A" });

  rl.setPrompt("> ");
  rl.prompt();
});

// Step 4.4 display messages
ws.on("message", (raw) => {
  let data;
  try {
    data = JSON.parse(raw.toString());
  } catch {
    console.log("[system] bad json from server");
    rl.prompt();
    return;
  }

  if (data.type === "system") {
    console.log(`[system] ${data.text}`);
  } else if (data.type === "msg") {
    console.log(`[${data.from}] ${data.text}`);
  } else {
    console.log("[system] unknown message type");
  }

  rl.prompt();
});

// Step 4.3 input loop
rl.on("line", (line) => {
  const text = line.trim();

  if (text === "/quit") {
    ws.close();
    rl.close();
    return;
  }

  send({ type: "msg", text });
  rl.prompt();
});

ws.on("close", () => {
  console.log("disconnected");
  process.exit(0);
});

ws.on("error", (err) => {
  console.log("error:", err.message);
});
