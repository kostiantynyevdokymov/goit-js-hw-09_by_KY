
// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// import Notyfy library
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// variable declaration

const refs = {
input: document.querySelector('#datetime-picker'),
startBtn: document.querySelector('[data-start]'),
days: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
seconds: document.querySelector('[data-seconds]'),
}


let getTime = null;
 
// disabled button when load page

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const getSelectDate = selectedDates[0].getTime();
      const getCurrentDate = new Date().getTime();

      if (getSelectDate > getCurrentDate) {
          refs.startBtn.removeAttribute('disabled');
          refs.startBtn.addEventListener('click', timerFu);
          getTime = getSelectDate;
      }
      else {
          refs.startBtn.setAttribute('disabled', true);
          Notify.failure('Please choose a date in the future');
      }
  },
};

// initialization flatpickr

flatpickr(refs.input, options);


// timer control function

function timerFu() {
    const selectDate = getTime;
    let timeId = setInterval(() => {
        const timeNow = new Date();
        const time = selectDate - timeNow;
        if (time > 0) {
            convertMs(time);
            refs.startBtn.setAttribute('disabled', true);
        }
        else {
            clearInterval(timeId);
        }
    }, 1000);
}

// timer count function

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}

// function to create a two-digit time value

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}