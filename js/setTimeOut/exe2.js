import fs from "fs";

fs.readdir("./textFolder/", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
  fs.readFile(`./textFolder/${data[0]}`, "utf-8", (err, filedata) => {
    if (err) {
      console.log("new error",err);
    } else {
      console.log(filedata);
    }
  });
});
