
var timer = document.querySelector("#clockdiv");
var viewHighscores = document.querySelector("body > ul > li > a");
var secondsLeft = document.querySelector("#clockdiv > span");
var startBtn = document.querySelector("#submit");

var sec = 75;
// fix the html/java conflict of the startBtn function 
// var time = setInterval(myTimer, 1000)



//startBtn.addEventListner("click", myTimer);

function myTimer() {
    secondsLeft.innerHTML = sec + "";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Out of time!");
    }
}





