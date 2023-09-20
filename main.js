const buttonStart = document.querySelector(".button_start");
const buttonStop = document.querySelector(".button_stop");

let number = 0;
let cron;
let h2 = document.querySelector("h2");

function startCount() {
  cron = setInterval(() => {
    number++;
    h2.innerHTML = number;
  }, 1000);
}

function stopCount() {
    clearInterval(cron)
}



buttonStart.addEventListener("click", startCount);
buttonStop.addEventListener("click", stopCount);
