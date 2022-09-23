const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");
const resultUser = document.getElementById("result-user-stat");
const resultComp = document.getElementById("result-comp-stat");
const resultFinal = document.getElementById("result-final-stat");
const choiceR = document.getElementById("r");
const choiceP = document.getElementById("p");
const choiceS = document.getElementById("s");
const start = document.querySelectorAll(".choice");
let compResult='';
let userResult='';
start.forEach(function gameStart(val){
    val.addEventListener("click", function game(e){
        userResult = e.currentTarget.id;
        if(userResult == 'r'){
            resultUser.innerHTML = resultUser.innerText + choiceR.innerHTML;
        } else if(userResult == 'p'){
            resultUser.innerHTML = resultUser.innerText + choiceP.innerHTML;
        } else if(userResult == 's'){
            resultUser.innerHTML = resultUser.innerText + choiceS.innerHTML;
        } 
        compGame();
        winner();
    });
}
);

function winner() {
    if (userResult == compResult) {
        resultFinal.innerText = "Winner: Tie";
    } else {
        if (userResult == 'r'){
            if (compResult == 'p') {
                resultFinal.innerText = "Winner: Computer";
                compScoreVal.innerText = Number(compScoreVal.innerText)+1;
            } else {
                resultFinal.innerText = "Winner: User";
                userScoreVal.innerText = Number(userScoreVal.innerText)+1;
            }
        }
        else if (userResult == 'p') {
            if (compResult == 's') {
                resultFinal.innerText = "Winner: Computer";
                compScoreVal.innerText = Number(compScoreVal.innerText)+1;
            } else {
                resultFinal.innerText = "Winner: User";
                userScoreVal.innerText = Number(userScoreVal.innerText)+1;
            }
        } else if (userResult == 's') {
            if (compResult == 'r') {
                resultFinal.innerText = "Winner: Computer";
                compScoreVal.innerText = Number(compScoreVal.innerText)+1;
            } else {
                resultFinal.innerText = "Winner: User";
                userScoreVal.innerText = Number(userScoreVal.innerText)+1;
            }
        }
    }
}
function compGame(){
    let compVal ='rps';
    compResult = compVal[Math.floor(Math.random()*3)];
    if(compResult == 'r'){
        resultComp.innerHTML = resultComp.innerText + choiceR.innerHTML;
    } else if(compResult == 'p'){
        resultComp.innerHTML = resultComp.innerText + choiceP.innerHTML;
    } else if(compResult == 's'){
        resultComp.innerHTML = resultComp.innerText + choiceS.innerHTML;
    } 
    console.log(compResult);
}