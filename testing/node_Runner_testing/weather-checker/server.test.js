import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { app } from "./server.js";

let server;
let port;

before(() => {
  // פורט זמני הוא בעצם אומר למחשב תן לי פורט פנוי עושים את זה לבדיקות בכדי לא להתקל בפורטים אחרים
  server = app.listen(0);
  port = server.address().port;
});

after(() => {
  server.close();
});

test("POST /check-weather → safe true", async () => {
  const res = await fetch(`http://localhost:${port}/check-weather`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      temperature: 25,
      windSpeed: 20,
    }),
  });
  
  const data = await res.json();
  
  assert.equal(data.safe, true);
});
