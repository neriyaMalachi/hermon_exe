// 3.1 – Promise that resolves with “Hello”
// function getHello() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Hello"), 500);
//   });
// }
// getHello().then(console.log);

// // 3.2 – Promise that resolves with sum
// function addAsync(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(a + b), 1000);
//   });
// }
// addAsync(5, 7).then((sum) => console.log(sum));

// // 3.3 – Promise that sometimes rejects
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       n % 2 === 0 ? resolve("Even") : reject("Odd number not allowed");
//     }, 800);
//   });
// }
// checkNumber(4).then(console.log).catch(console.error);
// checkNumber(5).then(console.log).catch(console.error);

// // 3.4 – Promise that simulates login
// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "1234") resolve("Login successful");
//       else reject("Invalid credentials");
//     }, 1200);
//   });
// }
// login("admin", "1234").then(console.log).catch(console.error);
// login("user", "0000").then(console.log).catch(console.error);

// // 3.5 – Promise that returns array
// function getNumbers() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve([1, 2, 3, 4, 5]), 700);
//   });
// }
// getNumbers().then((arr) => arr.forEach((n) => console.log(n)));

// // 3.6 – Promise that may fail randomly
// function unstableOperation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() < 0.5 ? resolve("Success") : reject("Random failure");
//     }, 1000);
//   });
// }
// unstableOperation().then(console.log).catch(console.error);

// // 3.7 – Promise that resolves with object
// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ name: "Dana", age: 16 }), 600);
//   });
// }
// getUser().then((u) => console.log(`User: ${u.name}, ${u.age}`));

// // 3.8 – Promise that rejects for negative values
// function squarePositive(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       n >= 0 ? resolve(n * n) : reject("Negative number not allowed");
//     }, 500);
//   });
// }
// squarePositive(3).then(console.log).catch(console.error);
// squarePositive(-1).then(console.log).catch(console.error);

// // 3.9 – Promise that resolves after two seconds
// function waitTwoSeconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Done waiting"), 2000);
//   });
// }
// waitTwoSeconds().then(console.log);

// // 3.10 – Promise that simulates download
// function downloadFile(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       url.startsWith("http")
//         ? resolve(`Downloaded from ${url}`)
//         : reject("Invalid URL");
//     }, 1500);
//   });
// }
// downloadFile("http://example.com/file").then(console.log).catch(console.error);
// downloadFile("ftp://bad").then(console.log).catch(console.error);

// with .then
const p = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 1000);
});

// console.log("starting")
// p.then(val => {
// console.log("value: ", val)
// console.log(`done`);
// })
// console.log("idan");

// const p =async()=>{
// setTimeout(() => {
//   return 2
// }, [1000]);
// }
// // with await
// console.log(`starting`);
// const val = await p
// console.log(`value: `, val);
// console.log(`done`);

function getusers() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ name: "neriya", age: 23, phone: "123456789" });
    }, [2000]);
  });
}

async function app() {
  console.log("start");

  let value =  getusers()
  console.log(value);

  console.log("end");
}
app();
