const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timeDisplay = document.querySelector("h1 span");
const gifEmbed = document.getElementById("gifEmbed");

let timerInterval;
let elapsedSeconds = 0;

function updateTimeDisplay() {
  const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals

  // show gif when starting
  try {
    if (gifEmbed) gifEmbed.classList.remove("hidden");
  } catch (e) {
    console.warn("Could not show gif embed", e);
  }

  timerInterval = setInterval(() => {
    elapsedSeconds++;
    updateTimeDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  // hide gif when stopping
  try {
    if (gifEmbed) gifEmbed.classList.add("hidden");
  } catch (e) {
    console.warn("Could not hide gif embed", e);
  }
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
