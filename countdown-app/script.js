const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timer = document.getElementById("timer");
const countDown = document.getElementById("countDown");
const reset = document.getElementById("reset");
const input = document.querySelectorAll("input");

// variable to store entered values
let countHours = 0;
let countMin = 0;
let countSec = 0;

// variable to store setInterval 
let timeInterval = null;
// function to show count down to user
function countDownOut(){
    timer.innerHTML = `<strong>${countHours}</strong> <i>Hours</i> <strong>${countMin}</strong> <i>Minutes</i> <strong>${countSec}</strong> <i>Seconds</i>`;
}

// Listner to input field to get entered value by user
input.forEach(function inputTime(val) {
    val.addEventListener("input", function time(int) {
        let idS = int.currentTarget.id;
        let idV = int.currentTarget.value;
        if (idS == "hours") {
            countHours = idV;
        }else if (idV < 60 && idS == 'minutes') {
            countMin = idV;
        }
        else if (idV < 60 && idS == 'seconds') {
            countSec = idV;
        } else {
            alert("Please Enter less than 60 " + idS.toUpperCase());
            if (idS == 'minutes') {
                countMin = 59;
                minutes.value = 59;
            } else {
                countSec = 59;
                seconds.value = 59;
            }
        }

    countDownOut();
})
});

// eventlistner on Start/Stop button
countDown.addEventListener("click", timerStart);


// function to start/stop count down
function timerStart() {
    if (countDown.innerText == 'Start') {
        countDown.innerText = 'Stop';
        timeInterval = setInterval(countDownFunc, 1000);
    } else {
        clearInterval(timeInterval);
        countDown.innerText = 'Start';
    }
}

// count down function
function countDownFunc(){
    if(countSec > 0){
        countSec--;
    }else{
        if(countMin > 0){
            countMin--;
            countSec = 59;
        }else if(countHours > 0){
            countHours--;
            countMin = 59;
        }else{
            clearInterval(timeInterval);
            countDown.innerText = 'Start';
        }
    }
    countDownOut();
}

// reset CountDown
reset.addEventListener("click", resetClock);
function resetClock(){
    clearInterval(timeInterval);
    countDown.innerText = 'Start';
        hours.value = null;
        minutes.value = null;
        seconds.value = null;
        countHours = 0;
        countMin = 0;
        countSec = 0;
        countDownOut();
}



