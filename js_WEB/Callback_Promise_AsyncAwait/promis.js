// Promise מייצג פעולה עתידית: resolve / reject 

// function loadUserPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const ok = true;
//       if (ok) resolve({ id: 2, name: "Dana" });
//       else reject(new Error("Failed to load user"));
//     }, 1000);
//   });
// }

// loadUserPromise()
//   .then((user) => {
//     console.log("Promise result:", user);
//   })
//   .catch((err) => {
//     console.log("Promise error:", err.message);
//   });

// ------------------------------------------

function add1(x) {
  return  Promise.resolve(x + 1);
}

function times2(x) {
  return  Promise.resolve(x * 2);

}

Promise.resolve(5)
  .then(add1)   // 6
  .then(times2) // 12
  .then((result) => console.log("Chained result:", result))
  .catch((err) => console.log("Chain error:", err.message));

