// simple Callback

// check the fs

function loadUserWithCallback(cb) {
  setTimeout(() => {
    cb({ id: 1, name: "Neriya" });
  }, 500);
}
loadUserWithCallback((user) => {
  console.log("Callback result:", user);
});

// ------------------------------------------

//Callback with return worng way, return not work
function getNumberWrong() {
  setTimeout(() => {
    return 5;
  }, 1000);
}

const n = getNumberWrong();
console.log("Wrong number:", n); // undefined
// ------------------------------------------

// Callback Hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 500);
  }, 500);
}, 457);
// ------------------------------------------
