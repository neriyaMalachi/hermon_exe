// 1) Await simple promise
// async function waitForHello() {
//   const msg = await new Promise((r) => setTimeout(() => r("Hello"), 500));
//   console.log(msg);
// }
// waitForHello();

function doubleAsync(n) {
  return new Promise((res) => {
    setTimeout(() => {
      res(n * 2);
    }, 0);
  });
}

async function runDouble() {
  console.log("START");
  const x = await doubleAsync(5);
  console.log("Result is:", x);
  console.log("END");
}
function name() {
  console.log("name");
}


runDouble();
name();

// // 3) Async fetch simulation
// function fetchUser() {
//   return new Promise((r) => setTimeout(() => r({ id: 1, name: "Dana" }), 1000));
// }
// (async function () {
//   const user = await fetchUser();
//   console.log("User name:", user.name);
// })();

// // 4) Async try/catch for rejection
// function validateAge(age) {
//   return new Promise((resolve, reject) => (age >= 18 ? resolve("OK") : reject("Too young")));
// }
// (async function () {
//   try {
//     await validateAge(16);
//     console.log("Allowed");
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // 5) Two awaits in a row
// function getNumber() { return new Promise((r) => setTimeout(() => r(3), 400)); }
// function square(n)   { return new Promise((r) => setTimeout(() => r(n * n), 400)); }
// (async function () {
//   const n = await getNumber();
//   const s = await square(n);
//   console.log("Final:", s);
// })();

// // 6) Await inside a loop
// function delay(ms) { return new Promise((r) => setTimeout(r, ms)); }
// (async function () {
//   for (let i = 1; i <= 3; i++) {
//     await delay(500);
//     console.log(i);
//   }
// })();

// // 7) Await random failure
// function maybeFail() {
//   return new Promise((resolve, reject) => (Math.random() < 0.3 ? reject("Random error") : resolve("All good")));
// }
// (async function () {
//   try {
//     const res = await maybeFail();
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // 8) Await on array of promises
// function p1() { return new Promise((r) => setTimeout(() => r("A"), 300)); }
// function p2() { return new Promise((r) => setTimeout(() => r("B"), 500)); }
// function p3() { return new Promise((r) => setTimeout(() => r("C"), 200)); }
// (async function () {
//   const results = await Promise.all([p1(), p2(), p3()]);
//   console.log(results);
// })();

// // 9) Async function returning a value
// async function getGreeting() {
//   const g = await new Promise((r) => setTimeout(() => r("Hello!"), 700));
//   return `Greeting: ${g}`;
// }
// getGreeting().then(console.log);

// // 10) Fetch + validation chain using async/await
// function getUser() { return new Promise((r) => setTimeout(() => r({ id: 1, name: "Dana", age: 16 }), 500)); }
// function ensureAdult(user) {
//   return new Promise((resolve, reject) => (user.age < 18 ? reject("Not an adult") : resolve(user)));
// }
// (async function () {
//   try {
//     const u = await getUser();
//     const ok = await ensureAdult(u);
//     console.log("Approved:", ok);
//   } catch (e) {
//     console.log("Error:", e);
//   }
// })();
