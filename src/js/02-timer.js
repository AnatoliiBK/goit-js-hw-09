// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputR = document.querySelector("#datetime-picker");
const buttonR = document.querySelector("[data-start]");
const daysR = document.querySelector("[data-days]");
const hoursR = document.querySelector("[data-hours]");
const minutesR = document.querySelector("[data-minutes]");
const secondsR = document.querySelector("[data-seconds]");

const timerR = document.querySelector(".timer");

const currentTime = new Date(); 
let timerId;
let timeLeftVis ={}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {

    console.log(selectedDates[0].getTime());
    console.log(options.defaultDate.getTime())
    console.log(convertMs(selectedDates[0].getTime()))
    console.log(convertMs(options.defaultDate.getTime()))

    if (selectedDates[0].getTime() - options.defaultDate.getTime() > 1000) {
      buttonR.removeAttribute("disabled", true)
    } else {
      alert("Please choose a date in the future");  
    }
  },
};

const flatPickr = flatpickr(inputR, options)

console.log(currentTime)
console.log(Date.now())
console.log(flatPickr)

const onButtonR = () => {
  timerId = setInterval(() => {

    let timeLeft = flatPickr.selectedDates[0].getTime() - Date.now();
    console.log(timeLeft)
    console.log(timeLeftVis)
    if (timeLeft >= 1000) {
      timeLeftVis = convertMs(timeLeft);
      daysR.textContent = timeLeftVis.days;
      hoursR.textContent = timeLeftVis.hours;
      minutesR.textContent = timeLeftVis.minutes;
      secondsR.textContent = timeLeftVis.seconds;
    } else {
      clearInterval(timerId);
    }
  }, 1000)
}

buttonR.setAttribute("disabled", true)
buttonR.addEventListener("click", onButtonR)



// flatpickr(inputR, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


buttonR.style.width = "68px";
buttonR.style.height = "30px";
buttonR.style.fontSize = "18px";
buttonR.style.marginLeft = "10px";

timerR.style.display = "flex";
timerR.style.columnGap = "30px";













// const fieldR = document.querySelector(".field");
// const valueR = document.querySelector(".value");
// const daysR = document.querySelector("[data-days");
// const hoursR = document.querySelector("[data-hours");
// const minutesR = document.querySelector("data-minutes");
// const secondsR = document.querySelector("data-seconds");

// const currentYear = currentTime.getFullYear();
// const currentMonth = currentTime.getMonth();

// timerR.style.justifyContent = "center"
// inputR.style.width = "700px"
// inputR.style.height = "48px"

// const nextDate = new Date(`January 01 ${currentYear + 1} 00:00:00`)
// const diff = nextDate - currentTime

// const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
// const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
// const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
// const seconsLeft = Math.floor(diff / 1000) % 60;

// console.log(daysLeft, hoursLeft, minutesLeft, seconsLeft)

// daysR.innerText = daysLeft;
// hoursR.innerText = hoursLeft;
// minutesR.innerText = minutesLeft
// secondsR.innerText = seconsLeft
  