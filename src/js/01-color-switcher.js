const bodyColor = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let colorRan = null;

startBtn.addEventListener("click", bgdBody);
stopBtn.setAttribute("disabled", true);



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function bgdBody() {
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled", true);
  startBtn.removeEventListener("click", bgdBody);
  colorRan = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
} 


stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled", true)
  startBtn.addEventListener("click", bgdBody)
  stopBtn.setAttribute("disabled", true);
  clearInterval(colorRan);
  console.log(`Interval with id ${colorRan} has stopped!`);
});
