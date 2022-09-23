const timerBtn = document.getElementById("timerBtn");
const reset =document.getElementById("reset");
const timer =document.getElementById("timer");

// stop watch start and stop
let timeCount = 0;
let second = 0;
let min = 0;
let hour = 0;
let interval = null;

timerBtn.addEventListener("click", clock); 
function clock(){
    if(timerBtn.innerText == 'Start'){
        timerBtn.innerText = 'Stop';
        
        interval = setInterval(() => {
            timeCount++;
            if(timeCount == '100'){
                second += Math.floor(timeCount/100);
                timeCount = 0;

                if(second == '60'){
                    min += Math.floor(second/60);
                    second -= 60;
                }else if(min == '60'){
                    hour += Math.floor(min/60);
                    min -=60;
                }
            }

            timer.innerText = `${hour} hour ${min} min ${second} sec ${timeCount} milisec`;
            
        }, 10); // adding second to varible after one second interval
    }
    else{
        timerBtn.innerText = 'Start';
        clearInterval(interval); // stoping clock

    }
}


// reset stopWatch
reset.addEventListener("click", resetClock);
function resetClock(){
    clearInterval(interval);
    timerBtn.innerText = 'Start';
        timeCount = 0;
        second = 0;
        min = 0;
        hour = 0;
    timer.innerText = `${hour} hour ${min} min ${second} sec ${timeCount} Milisec`;
}
