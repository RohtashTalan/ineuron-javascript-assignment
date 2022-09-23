const submitBtn = document.getElementById("submit");
const input = document.getElementById("input");
const qrImg = document.getElementById("img");
const apiUrl ="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";


// encodeURIComponent()

submitBtn.addEventListener("click", qrcode);

function qrcode(){
    let url = apiUrl+encodeURIComponent(input.value);
    fetch(url).then((response) => response).then((data) => {
        qrImg.style.display = "block";
        qrImg.src = data.url;
      });
}

