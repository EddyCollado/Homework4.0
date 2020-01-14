//step 1: create relatable variables to build with
var viewHighscores = document.querySelector("body > ul > li > a");
var secondsLeft = document.querySelector(".seconds");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var quizContainer = document.querySelector("#card");
var questionNumber = document.querySelector("#question-number");
// Setting timer to a locked 75 seconds to count back from
var sec = 75;


// Setting the currentQIndex to begin at 0
var currentQuestionIndex = 0;
//Declare the timer as a global scope to access in and outside of functions, this helped so much!
var timerId;

//Step 3: create a function using the forEach loop to render the quiz and initiate timer. Try using a slide or hide command
    function startQuiz () {
      var quizArea = document.querySelector("#card > div > p")
      quizArea.setAttribute("class", "hide");
      startBtn.setAttribute("class", "hide");
      questionNumber.setAttribute("class", "hide");
      questionsEl.removeAttribute("class");
//Step 7: nest functioning timer to start of quiz
      timerId = setInterval(timer, 1000);

      secondsLeft.textContent = sec;
      retrieveQues();
    }

    //Step 2: create a function that reveals the quiz questions in a forEach loop, rendering each quiz question attribute
    function retrieveQues () {
      var currentQuestion = myQuestions[currentQuestionIndex];
      var titleEl = document.querySelector("#question-header");
      titleEl.textContent = currentQuestion.title;
      choicesEl.innerHTML = "";
// Made a loop for the choices, at first I had a for loop, but had trouble getting that to work correctly.
      currentQuestion.choices.forEach(function(choice) {
// creates a new button for each choice with their corresponding value
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.setAttribute("class", "choicebtn");

        choiceBtn.textContent = choice;
// Add an event to starts a function question questionCheck value to move on to the next question
        choiceBtn.onclick = questionCheck;
        choicesEl.appendChild(choiceBtn);
      });
    }

    
//Step 4: Add a function that advances the question while keeping track of the timer
    function questionCheck () {
      if (this.value !== myQuestions[currentQuestionIndex].answer) {
        sec -= 15;

        if (sec < 0) {
          sec = 0;
        }
        secondsLeft.textContent = sec;
      }  
        currentQuestionIndex ++;

        if (currentQuestionIndex === myQuestions.length) {
          quizEnd();
        } else {
          retrieveQues();
        }
    }
//step 5: Trigger the end of the quiz by clearing the timmer and combing the final tally with the outcome of the timer
    function quizEnd () {
      var gameOverEl = document.querySelector("#gameOver");
      var finalScoreEl = document.querySelector("#finalScore");
      
      clearInterval(timerId);

      gameOverEl.removeAttribute("class");
      finalScoreEl.textContent = sec;
      questionsEl.setAttribute("class", "hide");
    }
//Step 6: a function timer that corresponds to the currentQuestions.
    function timer () {
      sec--;
      secondsLeft.textContent = sec;

      if (sec <= 0) {
        quizEnd();
      }
    }
    
//Click event for the "Start Quiz" button
startBtn.onclick = startQuiz;
// on submit, show results
//viewHighscores.addEventListener('click', showResults);

//function renderQuiz() {
//  x = JSON.stringify(myQuestions);
  // Clear todoList element and update todoCountSpan
//  quizArea.innerHTML = "";
//  quiz.textContent =  x;

//for (var i = 0; i < myQuestions.length; i++) {
//  var questionsArray = myQuestions[i];

//  console.log(questionsArray);
//  }

//}


//$("#submit").on("click", function () {
//  var time = setInterval(myTimer, 1000);

//  function myTimer() {
 //     secondsLeft.textContent = sec + "";
 //     sec--;
//      if (sec == -1) {
//          clearInterval(time);
//          alert("Out of time!");
//      } 
//  }






