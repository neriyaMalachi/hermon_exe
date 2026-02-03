import readlineSync from "readline-sync";

export default function menuFunction() {
  console.log(
    '1. Search for a stock by name or id \n2. Show all stocks above or below a given price\n3. Buy or sell a stock\n4. Exit'
  );

  let answer = readlineSync.question();

  return answer;
}
