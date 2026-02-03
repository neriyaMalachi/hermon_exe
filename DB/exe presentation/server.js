import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase = createClient(process.env.supabase_url, process.env.anon_key);

// 1) INSERT
const insertRes = await supabase
  .from("test")
  .insert([{ name: "hello", age: 25 }]) // שנה שדות לפי העמודות שלך
  .select();

console.log("insert data =>", insertRes.data);
console.log("insert error =>", insertRes.error);

// 2) SELECT
const selectRes = await supabase.from("test").select("*");

console.log("select data =>", selectRes.data);
console.log("select error =>", selectRes.error);
