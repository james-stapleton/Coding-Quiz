var timerElement = document.querySelector(".timer");
var timerText = document.querySelector("#timer-text");
var timerCounter;
var timer;
var questionElement = document.querySelector("#question");
var questionNumber = 0; //index into questionArray 
var answerElement = document.querySelector("#answer-list");
var score = 0;
var isPaused = false;

var questionArray = [ 
    {question: "What is JavaScript?",
    choices: ["A website", "A scripting language", "A browser", "A computer"],
    answer: "answer1"
    },
    {question: "What is the syntax for calling a function?",
    choices: ["functionName();", "<functionName>", "A function calls itself", ".functionName"],
    answer: "answer0"},
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
      if (!isPaused) {
      timerCounter--;
      console.log(timerCounter);
      timerElement.textContent = timerCounter;
      if (timerCounter <= 0) {
        // Clears interval
        clearInterval(timer);
        timerElement.textContent = 0;
        finish();
      }
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
    //Set the h2 with the question id to the question from the object at the index value provided by question number
    questionElement.textContent = questionArray[questionNumber].question;
    //Set the answer choices
    answerElement.innerHTML = "";
    for (var i = 0; i<4; i++) {
        var li = document.createElement("li");
        li.textContent = questionArray[questionNumber].choices[i];
        li.id = "answer" + i;
        console.log(li.id);
        answerElement.appendChild(li);
    }
    answerCompare();
}

//get the id of the list elements
//maybe store them in an array or something
function answerCompare() {

    
    var correct;

    for (var i = 0; i < 4; i++) {
        setId = "#answer"+i;
        var selection = document.querySelector(setId);
        console.log("This should say answerid" + selection.id);
        selection.addEventListener("click", function() {
            var choice = this.id;
            correct = questionArray[questionNumber].answer;
            console.log("Choice: " + choice + "\nCorrect: " +correct);
            if (choice == correct) {
                console.log("correct");
                score++;
                this.style.backgroundColor = "green";
                alert("correct");
                
            }
            else {
                console.log("incorrect");
                timerCounter = timerCounter - 5;
                alert("incorrect");
            }
            var next = document.createElement("button");
            next.textContent = "Next Question";
             answerElement.appendChild(next);
            isPaused = true;

            next.addEventListener("click", function() {
                isPaused = false;
                questionNumber++;
                quiz();
            });        
        });
        selection.addEventListener("mouseover", function () {
            this.style.backgroundColor = "aqua";
        });

        selection.addEventListener("mouseout", function(){
            this.style.backgroundColor = "white";

        });
    }

};

function finish () {
    questionElement.innerHTML = "Game Over! Your score is: " + score + " Input initials:"
    answerElement.innerHTML = ""

    if (timerCounter <= 0) {
        console.log("Game over! Too slow or too stupid--or both");
    }  
    else {

    }

    console.log("Score: " + score);

}