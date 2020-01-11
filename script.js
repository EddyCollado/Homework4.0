
var timer = document.querySelector("#clockdiv");
var viewHighscores = document.querySelector("body > ul > li > a");
var secondsLeft = document.querySelector("#clockdiv > span");
var startBtn = document.querySelector("#submit");
var quiz = document.querySelector("#quiz");
var results = document.querySelector("#results");
var quizBox = document.querySelector("quiz-container");
var quizArea = document.querySelector("#results > p")

var sec = 75;
var highScore = 0;


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

    
    function renderQuiz() {
      x = JSON.stringify(myQuestions);
      // Clear todoList element and update todoCountSpan
      quizArea.innerHTML = "";
      quiz.textContent =  x;

    for (var i = 0; i < myQuestions.length; i++) {
      var questionsArray = myQuestions[i];

      console.log(questionsArray);
    }

    
  }

  renderQuiz();

});



// on submit, show results
//viewHighscores.addEventListener('click', showResults);











