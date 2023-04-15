// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const inputR = document.querySelector("#datetime-picker");
const buttonR = document.querySelector("[data-start");
const timerR = document.querySelector(".timer");
const fieldR = document.querySelector(".field");
const valueR = document.querySelector(".value");
const daysR = document.querySelector("[data-days");
const hoursR = document.querySelector("[data-hours");
const minutesR = document.querySelector("data-minutes");
const secondsR = document.querySelector("data-seconds");

const currentTime = new Date();

const currentYear = currentTime.getFullYear();
const currentMonth = currentTime.getMonth();
console.log(currentMonth)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr(inputR, options);

timerR.style.display = "flex";
timerR.style.columnGap = "10px";
fieldR.style.display = "flex";
fieldR.style.flexDirection = "column";
valueR.style.fontSize = "32px"

  