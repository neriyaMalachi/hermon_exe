import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log(`ws://localhost:8080`);


function broadcast(obj) {
  const data = JSON.stringify(obj);
  for (const client of wss.clients) {
    if (client.readyState === client.OPEN) {
      client.send(data);
    }
  }
}

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "system", text: "send join first" }));

  ws.on("message", (raw) => {
    const str = raw.toString();
    let payload;
    try {
      payload = JSON.parse(str);
    } catch {
      ws.send(JSON.stringify({ type: "system", text: "bad json" }));
      return;
    }

    if (
      !payload ||
      typeof payload.type !== "string" ||
      payload.type.trim() === ""
    ) {
      ws.send(JSON.stringify({ type: "system", text: "missing type" }));
      return;
    }

    if (payload.type === "join") {
      const name = payload.name;

      if (typeof name !== "string" || name.trim() === "") {
        ws.send(JSON.stringify({ type: "system", text: "join invalid" }));
        return;
      }

      ws.name = name.trim();
      broadcast({ type: "system", text: `${ws.name} joined` });
      return;
    }

    if (payload.type === "msg") {
      if (!ws.name) {
        ws.send(
          JSON.stringify({ type: "system", text: "you must join first" })
        );
        return;
      }

      const text = payload.text;

      if (typeof text !== "string") {
        ws.send(JSON.stringify({ type: "system", text: "text invalid" }));

        return;
      }

      const trimmed = text.trim();
      if (trimmed.length < 1 || trimmed.length > 100) {
        ws.send(JSON.stringify({ type: "system", text: "text invalid" }));

        return;
      }

      broadcast({ type: "msg", from: ws.name, text: trimmed });
      return;
    }

    ws.send(JSON.stringify({ type: "system", text: "unknown type" }));
  });

  ws.on("close", () => {
    if (ws.name) {
      broadcast({ type: "system", text: `${ws.name} left` });
    }
  });
});
