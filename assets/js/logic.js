//Select start button and store 
var startBtn = document.getElementById("start");
var questionsElement = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var timer = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var questionDiv = document.getElementById("questions");
var submit = document.getElementById("submit");
var initials = document.getElementById("initials");

var time = 60;
var correct = 0;
var questionIndex = 0;
var startTimer = true;
var ticker

//Call startQuiz function on button click
// Cannot be startQuiz(); or it will immediately run
startBtn.onclick = startQuiz;
//Starts timer upon entering the quiz
startBtn.addEventListener("click", function(){
    ticker = setInterval(function () {
        

        if (time <= 0) {
            questionDiv.setAttribute("class", "hide");
            endScreen.removeAttribute("class");
            clearInterval(ticker);
        }
        else {
            timer.textContent = '';
            timer.append(time);
            time--;
        }
    }, 1000);
    
});



//Function to start quiz
function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");

    //Show questions
    console.log(questions);
    questionsElement.textContent = ''
    questionChoices.textContent = ''

    //test
    questionsElement.append(questions[questionIndex].title);
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var choiceB = document.createElement("button");
        choiceB.innerHTML = questions[questionIndex].choices[i];
        choiceB.onclick = handleChoice;

        questionChoices.append(choiceB);
    }
    questionsElement.removeAttribute("class");
}


// handle choice function
function handleChoice(e) {
    console.log("you got clicked", e.target.textContent);
    if (e.target.textContent == questions[questionIndex].answer) {
        console.log("correct");
        correct++;
    }
    else {
        time = time - 10;
    }
    questionIndex++;

    if (questionIndex < questions.length) {
        startQuiz();
    }
    else {

        questionDiv.setAttribute("class", "hide");
        endScreen.removeAttribute("class");
        // need a way to access ticker varible inside the event listener
        console.log('TICKER ???', ticker)
        clearInterval(ticker);

    }

}

submit.onclick = saveScore;

function saveScore() {
    console.log('we go t clceikd', initials.value)
    console.log('CORRECT~!!', correct)

    var newScore = {
        name: initials.value,
        score: correct,
        time: time,

    }

    var strScoreArrey

    if (localStorage.getItem('scores')) {

        var existingArray = JSON.parse(localStorage.getItem('scores'))
        console.log('WE HAVE PREVIOUS ARRAY!!!', existingArray)
        existingArray.push(newScore)
        strScoreArrey = JSON.stringify(existingArray)

    } else {
        var scoreArray = []
        scoreArray.push(newScore)

        strScoreArrey = JSON.stringify(scoreArray)
        console.log('STR ARRAY TO SAVE!!!', strScoreArrey)
    }

    localStorage.setItem('scores', strScoreArrey)




}