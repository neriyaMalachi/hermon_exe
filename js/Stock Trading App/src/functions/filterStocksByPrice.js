import allData from "../../data/StockMarket.js";

export default function filterStocksByPrice(givenPrice, above) {
  let DataAfterSerch;
  if (above == "true") {
    console.log(above);
    
    DataAfterSerch = allData.stocks.filter((item) => {
      if (givenPrice < item.currentPrice) {
        return true;
      }
    });
  } else {
    console.log(above);

    DataAfterSerch = allData.stocks.filter((item) => {
      if (givenPrice > item.currentPrice) {
        return true;
      }
    });
  }
  return DataAfterSerch;
}
