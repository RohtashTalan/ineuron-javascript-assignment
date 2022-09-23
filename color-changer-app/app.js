const btn = document.getElementById("button"); // selcting of button 

btn.addEventListener("click", changeColor); // adding Click EventListener


function changeColor(){
    let val = '0123456789abcdef'; // value to be used to generate random color hex code
    let color = "#";

// iteration to generate random hex color code
    for(let i = 0; i < 6; i++){
         color = color + val[Math.floor(Math.random()*16)];
    }
// Changing of background color with randomly generated color
    document.getElementById("canvas").style.backgroundColor = color;
}