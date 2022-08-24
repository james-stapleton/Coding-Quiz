var timerElement = document.querySelector(".timer");
var timerText = document.querySelector("#timer-text");
var timerCounter;
var timer;
var questionElement = document.querySelector("#question");
var questionNumber = 0; //index into questionArray 
var answerElement = document.querySelector("#answer-list");
var score = 0;
var isPaused = false;
var initials = document.createElement("input");
var submitScore = document.createElement("button");

var questionArray = [ 
    {question: "What is JavaScript?",
    choices: ["A website", "A scripting language", "A browser", "A computer"],
    answer: "answer1"
    },
    {question: "What is the syntax for calling a function?",
    choices: ["functionName();", "<functionName>", "A function calls itself", ".functionName"],
    answer: "answer0"},
    {question: "Arrays in JavaScript can be used to store...",
     choices: ["Strings", "Booleans", "Objects", "All the above" ],
     answer: "answer3"},
    {question: "The condition for an if statement is enclose in...",
    choices: ["{}", "<>", "[]", "()"],
    answer: "answer3"},
    {question: "A practical use for the console is... ",
    choices: ["Writing funny messages", "Debugging code", "Inspecting elements", "None of the above"],
    answer: "answer1"},
    {question: "Commonly used data types do NOT include... ",
    choices: ["Alerts", "Strings", "Booleans", "Numbers"],
    answer: "answer0"},
]

// question: " ",
//      choices: " ",
//      answer: " "

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
    timerCounter = 70;
    quiz();
    startTimer();
    });

    

function quiz() {
    //Set the h2 with the question id to the question from the object at the index value provided by question number
    if (questionNumber == questionArray.length - 1) {
        finish();
        return;
    }
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
        var feedback = "";
        console.log("This should say answerid" + selection.id);
        selection.addEventListener("click", function() {
            var choice = this.id;
            correct = questionArray[questionNumber].answer;
            console.log("Choice: " + choice + "\nCorrect: " +correct);
            if (choice == correct) {
                console.log("correct");
                score++;
                this.style.backgroundColor = "green";
                feedback = "Correct!";
            }
            else {
                console.log("incorrect");
                this.style.backgroundColor = "red";
                timerCounter = timerCounter - 5;
                feedback = "Incorrect!";
            }
            var feedbackText = document.createElement("p");
            feedbackText.textContent = feedback;
            answerElement.appendChild(feedbackText);

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
    isPaused = true;
    questionElement.textContent = "Game Over! Your score is: " + score + "\n" + "Input initials: "
    answerElement.innerHTML = ""
    questionElement.appendChild(initials);
    questionElement.appendChild(submitScore);

    if (timerCounter <= 0) {
        console.log("Game over! Too slow or too stupid--or both");
    }  
    else {

    }
    console.log("Score: " + score);
}

submitScore.addEventListener("click", function() {
    if (initials) {
        console.log(initials.value);
    }
});