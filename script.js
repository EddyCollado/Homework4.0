
var timer = document.querySelector("#clockdiv");
var viewHighscores = document.querySelector("body > ul > li > a");
var secondsLeft = document.querySelector("#clockdiv > span");
var startBtn = document.querySelector("#submit");
var quiz = document.querySelector("#quiz");
var results = document.querySelector("#results");
var quizBox = document.querySelector("quiz-container");

var sec = 75;
var highScore = 0;

const myQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "square brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above"
      },

      correctAnswer: "d"
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parentheses"
      },
  
      correctAnswer: "c"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
        d: "console.log"
      },
      correctAnswer: "d"
    }
  ];

$("#submit").on("click", function () {
    var time = setInterval(myTimer, 1000);
    function myTimer() {
        secondsLeft.innerHTML = sec + "";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            alert("Out of time!");
            alert("Here are your results!"), 76000;

        } 
    }

});



// on submit, show results
viewHighscores.addEventListener('click', showResults);











