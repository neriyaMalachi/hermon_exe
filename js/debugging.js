function props() {
  let total = 0;
  let arr = [1, 2, 3, 4];
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
  }
  console.log(total);
}
props();
