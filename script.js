
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer");
var quizBlock = document.querySelector("#quiz-block");
var startBlock = document.querySelector("#start-block");
var scoreBlock = document.querySelector("#score-block");
var timerCount;
var timer;

var q1 = document.querySelector(".q1");
var q2 = document.querySelector(".q2");
var q3 = document.querySelector(".q3");
var q4 = document.querySelector(".q4");
var q5 = document.querySelector(".q5");

var question = document.querySelector(".question");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var result = document.querySelector(".result");


startButton.addEventListener("click", function(){
    startBlock.setAttribute("class", "hide");
    quizBlock.setAttribute("class", "");
    q1.setAttribute("class","")
    startGame();
})

// The startGame function is called when the start quiz button is clicked
function startGame() {
    timerCount = 60;
    startTimer()
    question1()
  }

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        console.log(timerCount);
        timerElement.textContent = timerCount;
        if (timerCount == 0) {
            endQuiz()
            /*the question & answers would dissappear 
            your final score appears
            a text box appears 
            a submit button appears
            countdown timer stops */
        }
        /*if (timerCount >= 0) {
          // Tests if win condition is met
          if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            winGame();
          }
        }*/
},1000)

function hideQ1() {
    // if question 1 is answered correctly, hide question 1 and move on to question 2
} 
}

// Clears the timer, hides the quiz block, and reveals the score block 
function endQuiz() {
    clearInterval(timer);
    quizBlock. setAttribute("class","hide");
    scoreBlock.setAttribute("class","");
}

function question1() {
    question.textContent = "Who is your daddy?";
    button1.textContent = "Braddaddy";
    button2.textContent = "Pedro Pascal";
    button3.textContent = "Chris Evans";
    button4.textContent = "Jesus";
    button1.addEventListener("click", correct);
    button2.addEventListener("click", incorrect);
    button3.addEventListener("click", incorrect);
    button4.addEventListener("click", incorrect);
    function correct() {
        result.textContent = "Correct!";
        question2()
    }
    function incorrect() {
        result.textContent = "Incorrect!";
        question2()
    }
}


function question2() {
    question.textContent = "Who is your mommy?";
    button1.textContent = "Brie Larson";
    button2.textContent = "Gal Gadot";
    button3.textContent = "KristinaMama";
    button4.textContent = "Mother Mary";
    button1.addEventListener("click", incorrect);
    button2.addEventListener("click", incorrect);
    button3.addEventListener("click", correct);
    button4.addEventListener("click", incorrect);
    function correct() {
        result.textContent = "Correct!";
        question3()
    }
    function incorrect() {
        result.textContent = "Incorrect!";
        question3()
    }

}

function question3() {
    question.textContent = "Who is not an Avenger?";
    button1.textContent = "Wong";
    button2.textContent = "Thor";
    button3.textContent = "Modok";
    button4.textContent = "Rocket";
    button1.addEventListener("click", incorrect);
    button2.addEventListener("click", incorrect);
    button3.addEventListener("click", correct);
    button4.addEventListener("click", incorrect);
    function correct() {
        result.textContent = "Correct!";
        question4()
    }
    function incorrect() {
        result.textContent = "Incorrect!";
        question4()
    }

}

function question4() {
    question.textContent = "Who is Gamora?";
    button1.textContent = "Asgardian";
    button2.textContent = "Kree";
    button3.textContent = "Thanos' daughter";
    button4.textContent = "Thanos' lover";
    button1.addEventListener("click", incorrect);
    button2.addEventListener("click", incorrect);
    button3.addEventListener("click", correct);
    button4.addEventListener("click", incorrect);
    function correct() {
        result.textContent = "Correct!";
        question5()
    }
    function incorrect() {
        result.textContent = "Incorrect!";
        question5()
    }

}

function question5() {
    question.textContent = "What do you do?";
    button1.textContent = "Code";
    button2.textContent = "Cry";
    button3.textContent = "Party";
    button4.textContent = "Sleep";
    button1.addEventListener("click", incorrect);
    button2.addEventListener("click", correct);
    button3.addEventListener("click", incorrect);
    button4.addEventListener("click", incorrect);
    function correct() {
        result.textContent = "Correct!";
        endQuiz()
    }
    function incorrect() {
        result.textContent = "Incrrect!";
        endQuiz()
    }

}