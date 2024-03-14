const stopwatchEl = document.getElementById("stopwatch");
const startButtonEl = document.getElementById("startBtn");
const stopButtonEl = document.getElementById("stopBtn");
const resetButtonEl = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    stopwatchEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function stopStopwatch() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

function resetStopwatch() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  stopwatchEl.textContent = "00:00:00";

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startStopwatch);
stopButtonEl.addEventListener("click", stopStopwatch);
resetButtonEl.addEventListener("click", resetStopwatch);
