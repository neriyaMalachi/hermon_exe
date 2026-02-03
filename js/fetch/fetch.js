const BASE = "https://jsonplaceholder.typicode.com";

async function run() {
  
  // GET
  const r1 = await fetch(BASE + "/posts");
  const d1 = await r1.json();
  console.log("GET:", d1[0]);

  // POST
  const r2 = await fetch(BASE + "/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "test",
      body: "hello",
      userId: 1
    })
  });
  const d2 = await r2.json();
  console.log("POST:", d2);

  // PUT (UPDATE)
  const r3 = await fetch(BASE + "/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      title: "updated",
      body: "updated body",
      userId: 1
    })
  });
  const d3 = await r3.json();
  console.log("PUT:", d3);

  // DELETE
  const r4 = await fetch(BASE + "/posts/1", {
    method: "DELETE"
  });
  console.log("DELETE status:", r4.status);
}

run();
