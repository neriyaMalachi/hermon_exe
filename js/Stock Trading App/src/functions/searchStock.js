import allData from "../../data/StockMarket.js";

export default function searchStock(identifier) {


  let DataAfterSerch = allData.stocks.filter((item) => {
      
      if (identifier == item.id || identifier == item.name) {
       return true;
    }
  });
  return DataAfterSerch;
}
