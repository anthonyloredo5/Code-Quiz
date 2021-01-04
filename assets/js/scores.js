//get data from local storage 
var hName = document.getElementById("highscores");
var hScores = document.getElementById("score");
var hTime = document.getElementById("time");
var storedScores = JSON.parse(localStorage.getItem("scores"));

document.getElementById("clear").addEventListener("click", clear);


//for loop that builds display
for(var i = 0; i < storedScores.length; i++){
    //loop to display name
    var nameD = document.createElement("ol");
    nameD.innerHTML = (storedScores[i].name);
    hName.append(nameD);

    //loop to display score
    var scoreD = document.createElement("ol");
    scoreD.innerHTML = (storedScores[i].score);
    hScores.append(scoreD);

    //loop to display time
    var timeD = document.createElement("ol");
    timeD.innerHTML = (storedScores[i].time);
    hTime.append(timeD);
}

function clear(){
    localStorage.clear();
}
