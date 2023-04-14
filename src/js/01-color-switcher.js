const bodyColor = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let colorRan = null;
console.log(bodyColor)
console.log(startBtn)
console.log(stopBtn)



startBtn.addEventListener("click", colorRan)

bodyColor.style.backgroundColor = getRandomHexColor();
console.log(getRandomHexColor())

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  colorRan = setInterval(getRandomHexColor, 1000)
  console.log(colorRan)

  stopBtn.addEventListener("click", () => {
    clearInterval(colorRan);
    console.log(`Interval with id ${timerId} has stopped!`);
  });




// function getRandomHexColor() {
//     timerId = setInterval(() => {`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`}, 1000);
//     return timerId;
//   }


  // startBtn.addEventListener("click", () => {
//     // bgdColor.style.backgroundColor = setInterval(() => {`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`}, 1000);
    
//     bodyColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//     let colorBgd = bodyColor.style.backgroundColor;
//     console.log(colorBgd)
//     colorBgd = setInterval(() => {
//         `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`, 1000
//     })
// })
   


// startBtn.addEventListener("click", () => {
//     timerId = setInterval(() => {
//       console.log(`I love async JS!  ${Math.random()}`);
//     }, 1000);
//   });