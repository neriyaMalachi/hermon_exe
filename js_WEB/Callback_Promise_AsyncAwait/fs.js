import { promises as fs } from "fs";

console.log("step 1");

await fs.writeFile("./data.txt", "sdfgdfgadfgds");

console.log("step 2");
