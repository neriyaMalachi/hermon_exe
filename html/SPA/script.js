const home = document.getElementById("home");
const side = document.getElementById("side");
const mendi = document.getElementById("mendi");

function goSide() {
  home.style.display = "block";
  side.style.display = "none";
  mendi.style.display = "none";
}
function goHome() {
  home.style.display = "none";
  mendi.style.display = "none";
  side.style.display = "block";
}
function goMendi() {
  home.style.display = "none";
  side.style.display = "none";
  mendi.style.display = "block";
}
