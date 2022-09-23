let formChk = false;


let username = document.getElementById("user");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let conpassword = document.getElementById("conpass");

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;
let special = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

//when user entered UserName
username.onkeyup = function(){
        if(username.value.match(' ') || username.value.match(special)){
            document.getElementById("userAlert").innerHTML = "<i style='color:red;'>Space & Special Characters not allowed</i>";
            formChk = false;
        } else if(username.value != ''){
            document.getElementById("userAlert").innerHTML = "<i style='color:green;'>Valid UserName</i>";
            formChk = true;
        } 
    
}


// Validating Email input 
email.onkeyup = function() {
 let emailAlert = document.getElementById("emailAlert");
 if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
   formChk = true;
   emailAlert.innerHTML ="<i style='color:green;'>Valid Email</i>";
 }else{
    formChk = false;
   emailAlert.innerHTML ="<i style='color:red;'>Invalid Email</i>";
 }
  }

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

    // When the user clicks on the password field, show the message box
    password.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  password.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  password.onkeyup = function() {
    // Validate lowercase letters
    if(password.value.match(lowerCaseLetters)) {  
      letter.style.color = "#009218";
      formChk = true;
    } else {
        letter.style.color = "red";
        formChk = false;
    }
    
    // Validate capital letters
    if(password.value.match(upperCaseLetters)) {  
      capital.style.color = "#009218";
      formChk = true;
    } else {
      capital.style.color = "red";
      formChk = false;
    }
  
    // Validate numbers
    if(password.value.match(numbers)) {  
      number.style.color = "#009218";
      formChk = true;
    } else {
      number.style.color = "red";
      formChk = false;
    }
    
    // Validate length
    if(password.value.length >= 8) {
      length.style.color = "#009218";
      formChk = true;
    } else {
      length.style.color = "red";
      formChk = false;
    }
  }
   // Checking Repeted Password
   conpassword.onkeyup = function() {
    if(password.value == conpassword.value){
        // checking does value available 
        if(password.value != ''){
        document.getElementById('conpassAlert').innerHTML = "<i style='color:green;'>Password is confirmed</i>";
        formChk = true;}
    }else{
        if(conpassword.value != ''){
        document.getElementById('conpassAlert').innerHTML = "<i style='color:red;'>Password Does not Matched</i>";
        formChk = false;}
    }
   }


function signup(){
    if(formChk){
        document.getElementById("success").innerHTML = `
        UserName : ${username.value} <br>
        Email : ${email.value} <br>
        Password : ${password.value} <br>
        Confirm Password : ${conpassword.value} <br>
        Form Submitted SuccessFully
        `;

        // Reseting Form Values
        document.getElementById("user").value = null;
        document.getElementById("email").value = null;
        document.getElementById("pass").value = null;
        document.getElementById("conpass").value = null;

        // Reseting Alert messages
        document.getElementById("userAlert").innerHTML = '';
        document.getElementById("emailAlert").innerHTML = '';
        document.getElementById("passAlert").innerHTML = '';
        document.getElementById("conpassAlert").innerHTML = '';
    }

}