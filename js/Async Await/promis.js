// 1) Simple resolve
function getMessage() {
  return new Promise((resolve) => setTimeout(() => resolve("Hello from promise"), 500));
}
getMessage().then(console.log).catch(console.error);

// 2) Resolve with a number (1..10)
function getRandomNumber() {
  return new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random()*10)+1), 700));
}
getRandomNumber().then(n => console.log("Random:", n)).catch(console.error);

// 3) Reject if number is odd
function checkEven(n) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (n % 2 === 0 ? resolve("Even number") : reject("Odd number")), 500)
  );
}
checkEven(4).then(console.log).catch(console.error);
checkEven(5).then(console.log).catch(console.error);

// 4) Validate username
function validateUser(username) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (username === "admin" ? resolve("Valid user") : reject("Unknown user")), 1000)
  );
}
validateUser("admin").then(console.log).catch(console.error);
validateUser("guest").then(console.log).catch(console.error);

// 5) Simulated fetch data
function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve({ id: 1, name: "Dana" }), 1200));
}
fetchData().then(data => console.log("Name:", data.name)).catch(console.error);

// 6) Reject on empty string
function toUpperAsync(text) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (typeof text === "string" && text.length) resolve(text.toUpperCase());
      else reject("Empty string");
    }, 600)
  );
}
toUpperAsync("hello").then(console.log).catch(console.error);
toUpperAsync("").then(console.log).catch(console.error);

// 7) Promise with array result
function getNumbers() {
  return new Promise((resolve) => setTimeout(() => resolve([10, 20, 30]), 800));
}
getNumbers().then(arr => arr.forEach(n => console.log(n))).catch(console.error);

// 8) Chain: double then square
function double(n) { return new Promise((r) => setTimeout(() => r(n * 2), 400)); }
function square(n) { return new Promise((r) => setTimeout(() => r(n * n), 400)); }
double(3)
  .then(result => square(result))
  .then(finalValue => console.log("Final:", finalValue))
  .catch(console.error);

// 9) Random failure
function unstable() {
  return new Promise((resolve, reject) =>
    setTimeout(() => (Math.random() < 0.5 ? resolve("Success") : reject("Failure")), 1000)
  );
}
for (let i = 0; i < 3; i++) unstable().then(console.log).catch(console.error);

// 10) .catch only once at the end
function loadConfig() {
  return new Promise((resolve) => setTimeout(() => resolve({ mode: "dev" }), 700));
}
loadConfig()
  .then(cfg => ({ ...cfg, loadedAt: Date.now() }))
  .then(cfg => console.log("Config:", cfg))
  .catch(err => console.error("Chain error:", err));



  





