// Set Variables
// Start Section Variables
var startBlock = document.querySelector("#start-block");
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer");
var timerCount;
var timer;
// Quiz Section Variables
var quizBlock = document.querySelector("#quiz-block");
var question = document.querySelector(".question");
var questionNumber = 0;
var q1 = document.querySelector(".q1");
var q2 = document.querySelector(".q2");
var q3 = document.querySelector(".q3");
var q4 = document.querySelector(".q4");
var q5 = document.querySelector(".q5");
var q6 = document.querySelector(".q6");
var q7 = document.querySelector(".q7");
var q8 = document.querySelector(".q8");
var q9 = document.querySelector(".q9");
var q10 = document.querySelector(".q10");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
// Score Section Variables
var submitBlock = document.querySelector("#submit-block");
var result = document.querySelector(".result");
var initials = document.querySelector(".name");
var submitButton = document.querySelector(".submitButton");
var list = document.querySelector(".list");

// When user clicks the start button, hide the start section and start the quiz
startButton.addEventListener("click", function(){
startBlock.setAttribute("class", "hide");
quizBlock.setAttribute("class", "");
q1.setAttribute("class","")
startGame();
})

// The startGame function is called when the start quiz button is clicked, start the timer and show the first question
function startGame() {
timerCount = 90;
startTimer()
question1()
}

// Begin a countdown timer when the startGame function is called, decrease the timer by 1000 milliseconds, if the timer reaches zero or less than zero, end the game
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount == 0 || timerCount < 0) {
            endQuiz()
        }
    },1000)
}

// Quiz Questions
function question1() {
    questionNumber++;
    question.textContent = "\"Tony Stark was able to build this in a cave! With a box of scraps!\"";
    button1.textContent = "Whiplash";
    button2.textContent = "Obadiah Stane";
    button3.textContent = "Mandarin";
    button4.textContent = "Aldrich Killian";
    button1.value = "incorrect"
    button2.value = "correct"
    button3.value = "incorrect"
    button4.value = "incorrect"
}
function question2() {
    questionNumber++;
    question.textContent = "\"You know, I'm something of a scientist myself.\"";
    button1.textContent = "Lizard";
    button2.textContent = "Green Goblin";
    button3.textContent = "Vulture";
    button4.textContent = "Mysterio";
    button1.value = "incorrect"
    button2.value = "correct"
    button3.value = "incorrect"
    button4.value = "incorrect"
}
function question3() {
    questionNumber++;
    question.textContent = "\"For the first time in my existence, I am not alone!\"";
    button1.textContent = "Ego";
    button2.textContent = "Arishem";
    button3.textContent = "Malekith";
    button4.textContent = "Ghost";
    button1.value = "correct"
    button2.value = "incorrect"
    button3.value = "incorrect"
    button4.value = "incorrect"
}
function question4() {
    questionNumber++;
    question.textContent = "\"I've waited my whole life for this. The world's going to start over. I'MA BURN IT ALL!\"";
    button1.textContent = "Thanos";
    button2.textContent = "Arishem";
    button3.textContent = "Gorr";
    button4.textContent = "Killmonger";
    button1.value = "incorrect"
    button2.value = "incorrect"
    button3.value = "incorrect"
    button4.value = "correct"
}
function question5() {
    questionNumber++;
    question.textContent = "\"Give me a REAL fight!\"";
    button1.textContent = "Abomination";
    button2.textContent = "Zemo";
    button3.textContent = "Yellowjacket";
    button4.textContent = "Kaecilius";
    button1.value = "correct"
    button2.value = "incorrect"
    button3.value = "incorrect"
    button4.value = "incorrect"
}
function question6() {
    questionNumber++;
    question.textContent = "\"Darling, you have no idea what's possible.\"";
    button1.textContent = "Ego";
    button2.textContent = "Hela";
    button3.textContent = "Yon-Rogg";
    button4.textContent = "Namor";
    button1.value = "incorrect"
    button2.value = "correct"
    button3.value = "incorrect"
    button4.value = "incorrect"
}
function question7() {
    questionNumber++;
    question.textContent = "\The world's changed boys, time we change too!\"";
    button1.textContent = "Mysterio";
    button2.textContent = "Hela";
    button3.textContent = "Namor";
    button4.textContent = "Vulture";
    button1.value = "incorrect"
    button2.value = "incorrect"
    button3.value = "incorrect"
    button4.value = "correct"
}
function question8() {
    questionNumber++;
    question.textContent = "\"This is me being reasonable.\"";
    button1.textContent = "Scarlet Witch";
    button2.textContent = "Thanos";
    button3.textContent = "Hela";
    button4.textContent = "Gorr";
    button1.value = "correct"
    button2.value = "incorrect"
    button3.value = "incorrect"
    button4.value = "incorrect"
}
function question9() {
    questionNumber++;
    question.textContent = "\"I will return for judgement.\"";
    button1.textContent = "Ebony Maw";
    button2.textContent = "Thanos";
    button3.textContent = "Arishem";
    button4.textContent = "Dreykov";
    button1.value = "incorrect"
    button2.value = "incorrect"
    button3.value = "correct"
    button4.value = "incorrect"
}
function question10() {
    questionNumber++;
    question.textContent = "\"I am...inevitable?\"";
    button1.textContent = "Loki";
    button2.textContent = "Arishem";
    button3.textContent = "Thanos";
    button4.textContent = "Mysterio";
    button1.value = "incorrect"
    button2.value = "incorrect"
    button3.value = "correct"
    button4.value = "incorrect"
}

// Create a function to display correct or incorrect answers, if incorrect decrease the timer by 10 seconds
function checkAnswer(event) {
    if (event.target.value == "correct") {
       result.textContent = "Correct!";
    } else {
       result.textContent = "Incorrect!"
       timerCount = timerCount - 10;
    }
    // Create an if statment to move on to the next question
    if (questionNumber == 1) {
        question2()
    } else if (questionNumber == 2) {
        question3()
    } else if (questionNumber == 3) {
        question4()
    } else if (questionNumber == 4) {
        question5() 
    } else if (questionNumber == 5) {
        question6() 
    } else if (questionNumber == 6) {
        question7() 
    } else if (questionNumber == 7) {
        question8()
    } else if (questionNumber == 8) {
        question9()
    } else if (questionNumber == 9) {
        question10()
    } else {
        endQuiz()
    }
}

// When an answer is clicked, check the answer if it is correct or incorrect
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);

// Clears the timer, hides the quiz block, and reveals the submit score block 
function endQuiz() {
    clearInterval(timer);
    quizBlock. setAttribute("class","hide");
    submitBlock.setAttribute("class","");
}

// Click the submit button to log the initials and timer score
submitButton.addEventListener("click", logScore);

// Disables submit button after one click
const disableButton = () => {
    submitButton.disabled = true;
};
submitButton.addEventListener("click", disableButton);

// Get value from local storage
var highScores = JSON.parse(localStorage.getItem("localScores")) || [] 

// Create a function to add scores to the page and to the local storage
function logScore() {
    var scores = {
        initials: initials.value, 
        score: timerCount
    }
    highScores.push(scores)
    localStorage.setItem("localScores", JSON.stringify(highScores))
    for (let i=0; i < highScores.length; i++) {
        var li = document.createElement("li")
        li.textContent = "Initials: "+highScores[i].initials+ " Score: " +highScores[i].score;
        list.appendChild(li)
    }
}