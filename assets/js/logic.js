//Select start button and store 
var startBtn = document.getElementById("start");
var questionsElement = document.getElementById("questions");

//Call startQuiz function on button click
// Cannot be startQuiz(); or it will immediately run
startBtn.onclick = startQuiz;

//Function to start quiz
function startQuiz(){
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");

    //Show questions
    questionsElement.removeAttribute("class");
}