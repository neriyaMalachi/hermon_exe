// ---------------- Promise example

// function makePromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("The promes end successfull!");
//     }, 2000);
//   });
// }
// makePromise()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log("Error:", err);
//   });

// --------------- Promise example with async

// function makePromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("successfull"), 1500);
//   });
// }
// async function run() {
//   console.log("Start...");
//   const result = await makePromise();
//   console.log("Betwen");
//   console.log("Result:", result);
//   console.log("End");
// }
// run();

// // --------------------- promise all

// const p1 = new Promise(res => setTimeout(() => res("A"), 1000));
// const p2 = new Promise(res => setTimeout(() => res("B"), 1500));
// const p3 = new Promise(res => setTimeout(() => res("C"), 500));

// Promise.all([p1, p2, p3]).then(values => {
//   console.log(values); // ["A", "B", "C"]
// });

























