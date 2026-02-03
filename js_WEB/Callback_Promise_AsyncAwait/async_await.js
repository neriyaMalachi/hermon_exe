
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve("hello"), ms));
}

async function demoAwait() {
  console.log("Before await");
  let str = await wait(1000);
  console.log(str);

  console.log("After 1 second");
}
demoAwait();
