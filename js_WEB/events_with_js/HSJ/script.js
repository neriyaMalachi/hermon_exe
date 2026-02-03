const input = document.getElementById("messageInput");
const button = document.getElementById("sendBtn");

button.addEventListener("click", () => {
  const text = input.value;

  console.log("Text from input:", text);
});
