import readline from "readline-sync";
import allData from "../../data/StockMarket.js";
export default function OperateOnStock(operation, identifier) {
  let answer = readline.question("how many units to", operation);
  let trading = allData.stocks.filter((item) => {
    if (identifier == item.id || identifier == item.name) {
      return true;
    }
  });
  trading.availableStocks -= answer;
  let percentagePrice = (100 * 5) / trading.currentPrice;
  trading.currentPrice = percentagePrice;
  console.log(answer);
}
