const text = document.getElementById("text");
const char = document.getElementById("char");
const words = document.getElementById("words");
let str = null;

text.addEventListener("input",inputText);

function inputText(){
    str = this.value;

    char.innerHTML = "Total Charaters : <strong>"+str.length+"</strong>";

    let wordcount = str.trim().split(" ");
    let cleanList = wordcount.filter(function(e){
        return e != '';
    })

    words.innerHTML= "Total words : <strong>"+cleanList.length+"</strong>";
}


