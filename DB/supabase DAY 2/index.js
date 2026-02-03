import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

);

async function main() {
  // INSERT
  const insertRes = await supabase
    .from("todos")
    .insert([{ title: "First todo from Node", is_done: false }])
    .select(); // מחזיר את השורה שנוספה (אם מותר לפי RLS)

  console.log("insert:", insertRes);

  // SELECT
  const selectRes = await supabase.from("todos").select("*");
  console.log("select:", selectRes);
}

main().catch(console.error);
