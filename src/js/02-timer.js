// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputR = document.querySelector("#datetime-picker");
const buttonR = document.querySelector("[data-start]");
const daysR = document.querySelector("[data-days]");
const hoursR = document.querySelector("[data-hours]");
const minutesR = document.querySelector("[data-minutes]");
const secondsR = document.querySelector("[data-seconds]");

const timerR = document.querySelector(".timer");

const currentTime = new Date();

let timerId;
let timeLeftVis ={};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {

    if (selectedDates[0].getTime() - options.defaultDate.getTime() > 1000) {
      buttonR.removeAttribute("disabled", true)
    } else {
      // alert("Please choose a date in the future");
      Notiflix.Notify.info("Please choose a date in the future");  
    }
  },
};

const flatPickr = flatpickr(inputR, options);

const onButtonR = () => {
  timerId = setInterval(() => {
    buttonR.setAttribute("disabled", true);
    buttonR.removeEventListener("click", onButtonR);
    
    let timeLeft = flatPickr.selectedDates[0].getTime() - Date.now();
    
    if (timeLeft >= 0) {
      timeLeftVis = convertMs(timeLeft);
      daysR.textContent = timeLeftVis.days.toString().padStart(2, "0");
      hoursR.textContent = timeLeftVis.hours.toString().padStart(2, "0");
      minutesR.textContent = timeLeftVis.minutes.toString().padStart(2, "0");
      secondsR.textContent = timeLeftVis.seconds.toString().padStart(2, "0");
    } else {
      clearInterval(timerId);
    }
  }, 1000)
}

buttonR.setAttribute("disabled", true)
buttonR.addEventListener("click", onButtonR)

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

buttonR.style.width = "68px";
buttonR.style.height = "30px";
buttonR.style.fontSize = "18px";
buttonR.style.marginLeft = "10px";

timerR.style.display = "flex";
timerR.style.columnGap = "30px";



// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// console.log(currentTime)
// console.log(Date.now())
// console.log(flatPickr)

// console.log(selectedDates[0].getTime());
// console.log(options.defaultDate.getTime())
// console.log(convertMs(selectedDates[0].getTime()))
// console.log(convertMs(options.defaultDate.getTime()))