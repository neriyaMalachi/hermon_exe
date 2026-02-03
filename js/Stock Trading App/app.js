import filterStocksByPrice from "./src/functions/filterStocksByPrice.js";
import OperateOnStock from "./src/functions/OperateOnStock.js";
import searchStock from "./src/functions/searchStock.js";
import menuFunction from "./src/menu.js";
import readline from "readline-sync";

let flag = true;
while (flag) {
  let result = menuFunction();

  if (result == 1) {
    let identifier = readline.question("enter name or id for get trading");
    console.log(searchStock(identifier));
  } else if (result == 2) {
    let givenPrice = readline.question("enter price for get trading");
    let above = readline.question(
      "enter above for uper enter true,and for lower enter false"
    );
    console.log(filterStocksByPrice(givenPrice, above));
  } else if (result == 3) {
    let operation = readline.question(
      "enter true for 'buy' or false for 'sell'"
    );
    if (operation == "true") {
      operation = "buy";
    }
    if (operation == "false") {
      operation = "sell";
    }
    let identifier = readline.question("enter name or id for get trading");
    console.log(OperateOnStock(operation, identifier));
  } else if (result == 4) {
    console.log("good by");

    flag = false;
  } else {
    console.log("enter agen");
  }
}
