const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


clipboardEl.addEventListener('click', () => {
    
   // Copy the text inside the text field
  navigator.clipboard.writeText(resultEl.innerText);
  // Alert the copied text
  alert("Copied the text: " + resultEl.innerText);

});

generateEl.addEventListener('click', () => {
    console.log(uppercaseEl.checked)
    generatePassword(randomFunc.lower(), randomFunc.upper(), randomFunc.number(), randomFunc.symbol(), lengthEl.value-1);
});

function generatePassword(lower, upper, number, symbol, length) {
    let val = lower+upper+number+symbol;
    console.log(val);
    let randomPass='';
    for(let i = 0; i <= length; i++){
        randomPass = randomPass + val[Math.floor(Math.random()*val.length)];
    }
    resultEl.innerText = randomPass;
};

function getRandomLower() {
    let pass='';
    if(lowercaseEl.checked){
    let val = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < val.length/2; i++){
        pass = pass + val[Math.floor(Math.random()*25)];
    }
    return pass;
    }
    else{
        return pass;
    }

}

function getRandomUpper() {
    let pass='';
    if(uppercaseEl.checked){
        let val = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for(let i = 0; i < val.length/2; i++){
            pass = pass + val[Math.floor(Math.random()*25)];
        }
        return pass;
        }else{
            return pass;
        }
}

function getRandomNumber() {
    let pass='';
    if(numbersEl.checked){
        let val = '0123456789';
        for(let i = 0; i < val.length; i++){
            pass = pass + val[Math.floor(Math.random()*val.length)];
        }
        return pass;
        }else{
            return pass;
        }
}

function getRandomSymbol() {
    let pass='';
    if(symbolsEl.checked){
        let val = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        for(let i = 0; i < val.length/2; i++){
            pass = pass + val[Math.floor(Math.random()*val.length)];
        }
        return pass;
        } else {
            return pass;
        }
}