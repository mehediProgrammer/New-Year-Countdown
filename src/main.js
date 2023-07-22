const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// ------------
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

// Update Countdowntime
function updateCountdowntime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minute = Math.floor(diff / 1000 / 60) % 60;
  const second = Math.floor(diff / 1000) % 60;
  //console.log(day/hour/minute/second); // by the anser, convert minuties to daye, then the result
  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}
//updateCountdowntime();
setInterval(updateCountdowntime, 1000);
