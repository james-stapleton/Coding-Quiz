var timerElement = document.querySelector(".timer");
var timerCounter;
var timer;

var startButton = document.querySelector("#start-quiz");

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCounter--;
      console.log(timerCounter);
      timerElement.textContent = timerCounter;
      if (timerCounter === 0) {
        // Clears interval
        clearInterval(timer);
        console.log("loser");
      }
    }, 1000);
  }

  startButton.addEventListener("click", function() {
    console.log(startButton.innerHTML);
    timerCounter = 10;
    startTimer();
});