const text = document.getElementById("text");
const string = document.getElementById("input");
const reverse = document.getElementById("reverse");
let str = null;

text.addEventListener("input",inputText);

function inputText(){
    str = this.value.replaceAll(' ','');
let strArray = str.split('');
let reverseStr = strArray.reverse();
let reverseStrJoin = reverseStr.join('');

    string.innerHTML = "Input Value : <strong>"+str+"</strong>";
    reverse.innerHTML= "Reversed : <strong>"+reverseStrJoin+"</strong>";

    if(str == reverseStrJoin){
        document.getElementById("result").innerHTML = "Result : <strong style='color: #fdfe35;'>Plaindrome</strong>"
    }else{
        document.getElementById("result").innerHTML = "Result : <strong style='color: #fdfe35;'>NOt Plaindrome</strong>"
    }
}


