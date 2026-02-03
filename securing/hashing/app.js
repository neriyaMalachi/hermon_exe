import { hashPassword, verifyPassword } from "./authHash.js";

const hashed = await hashPassword("12345678", 10);
console.log("hashed:", hashed);

const ok = await verifyPassword("12345678", hashed);
console.log("match?", ok);
