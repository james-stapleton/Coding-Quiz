var timerElement = document.querySelector(".timer");
var timerText = document.querySelector("#timer-text");
var timerCounter;
var timer;
var questionElement = document.querySelector("#question");
var questionNumber = 0; //index into questionArray 
var answerElement = document.querySelector("#answer-list");

var questionArray = [ 
    {question: "What is JavaScript?",
    choices: ["A website", "A scripting language", "A browser", "A computer"],
    answer: 2
    },
    {},
    {},
    {},
    {},
    {},
]

var startButton = document.querySelector("#start-quiz");

function startTimer() {
    // Sets timer
    timerText.textContent = " seconds remaining";
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
    quiz();
    startTimer();
    });

function quiz() {
    questionElement.textContent = questionArray[questionNumber].question;
    var li = document.createElement("li");
    li.textContent = "TEST PLEASE WORK";
    answerElement.appendChild(li);
}