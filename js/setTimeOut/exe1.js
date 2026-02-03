// function getUserName(callback) {
//   setTimeout(() => {
//     const userName = "Moshe";
//     callback(userName);

//   }, 1000); // 1 second
// }
// getUserName(function(name) {
//   console.log("User name is: " + name);
// });


// function loadScore(callback) {
//   setTimeout(() => {
//     const score = 85;
//     callback(score); 
//   }, 1500);
// }

// console.log("End of script (placed before calling loadScore)?"); // requirement #5

// loadScore(function(score) {
//   console.log("Loaded score: " + score);
// });

// // Q: In which order are messages printed?
// // A typical run prints:
// // 1) "End of script (placed before calling loadScore)?"
// // 2) (after ~1.5s) "Loaded score: 85"

// function checkLogin(callback) {
//   // 2000ms async
//   setTimeout(() => {
//     const isLoggedIn = true; // boolean
//     callback(isLoggedIn);    // called only after 2s
//   }, 2000);
// }

// checkLogin(function(isLoggedIn) {
//   if (isLoggedIn) {
//     console.log("User is logged in");
//   } else {
//     console.log("User is NOT logged in");
//   }
// });

// function getProductPrice(productId, callback) {
//   // ignore productId logic; simulate 1200ms delay
//   setTimeout(() => {
//     const price = 99.9;
//     callback(price); // only after timeout
//   }, 1200);
// }

// console.log("Requesting product price..."); // requirement #5

// getProductPrice(123, function(price) {
//   console.log("Price for product 123 is: " + price);
// });

// function loadConfig(callback) {
//   setTimeout(() => {
//     const config = {
//       env: "dev",
//       debug: true,
//     };
//     callback(config); // once, after timeout
//   }, 500);
// }

// loadConfig(function(cfg) {
//   console.log("Config loaded:", cfg);
// });

// function addAsync(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 1000);
// }

// addAsync(5, 7, function(result) {
//   console.log("Sum is:", result); // expect 12
// });

// function getFirstAsync(array, callback) {
//   setTimeout(() => {
//     const first = array[0];
//     callback(first);
//   }, 700);
// }

// getFirstAsync(["a", "b", "c"], function(el) {
//   console.log("First:", el); // "a"
// });

// function isEvenAsync(number, callback) {
//   setTimeout(() => {
//     const isEven = number % 2 === 0;
//     callback(isEven);
//   }, 800);
// }

// isEvenAsync(4, function(isEven) {
//   console.log(4, isEven ? "is even" : "is odd");
// });

// isEvenAsync(5, function(isEven) {
//   console.log(5, isEven ? "is even" : "is odd");
// });

// function downloadFile(url, callback) {
//   setTimeout(() => {
//     console.log("Downloading from:", url);
//     callback("Download finished");
//   }, 1500);
// }

// downloadFile("http://example.com/file", function(msg) {
//   console.log(msg);
// });

// function doubleAsync(value, callback) {
//   setTimeout(() => {
//     const result = value * 2;
//     callback(result);
//   }, 300);
// }

// doubleAsync(10, function(result) {
//   console.log("Result:", result); // 20
// });











import fs from 'fs'
console.log("start");

fs.writeFile("note.txt", "Hello from async writeFile", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written successfully");
  }
});
console.log("end");













// const fs = require("fs");

// fs.readFile("note.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file", err);
//   } else {
//     console.log("Content:", data);
//   }
// });

// const fs = require("fs");

// fs.appendFile("note.txt", "\nNew line added", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Line appended");
//   }
// });

// const fs = require("fs");

// fs.mkdir("logs", (err) => {
//   if (err) {
//     // If exists, Node will error (EEXIST). Still show the error, as requested.
//     console.error(err);
//   } else {
//     console.log("Directory 'logs' created");
//   }
// });

// const fs = require("fs");

// fs.writeFile("logs/log.txt", "First log line", (err) => {
//   if (err) {
//     console.error("Error creating log file");
//   } else {
//     console.log("Log file created");
//   }
// });

// const fs = require("fs");

// fs.readdir("logs", (err, files) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Files in logs:");
//     files.forEach((f) => console.log(" -", f));
//   }
// });

// const fs = require("fs");

// fs.stat("note.txt", (err, stats) => {
//   if (err) {
//     console.error("Error getting stats", err);
//   } else {
//     console.log("Is file:", stats.isFile());
//     console.log("Size:", stats.size);
//   }
// });

// const fs = require("fs");

// fs.unlink("logs/log.txt", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("log.txt deleted");
//   }
// });

// const fs = require("fs");

// fs.writeFile("note.txt", "New content here", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("note.txt overwritten");

//     fs.readFile("note.txt", "utf8", (err2, data) => {
//       if (err2) {
//         console.error("Error reading file", err2);
//       } else {
//         console.log("New content:", data);
//       }
//     });
//   }
// });

// const fs = require("fs");

// fs.mkdir("data", (err) => {
//   if (err) {
//     console.error("Error creating 'data' directory", err);
//     return;
//   }
//   console.log("Directory 'data' created");

//   fs.writeFile("data/info.txt", "Some info", (err2) => {
//     if (err2) {
//       console.error("Error creating file inside 'data'", err2);
//     } else {
//       console.log("File 'data/info.txt' created");
//     }
//   });
// });