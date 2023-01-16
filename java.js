const inputString = document.querySelector("#str");
const inputResult = document.querySelector("#result");

const btnEncriptar = document.querySelector("#en");
const btnDesencriptar = document.querySelector("#des");
const btnCopy = document.querySelector("#copy");


function encriptar(){
    var str = inputString.value;
    var stringEncriptado = str
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    inputResult.value = stringEncriptado;
}
function desencriptar(){
    var str = inputString.value;
    var stringDesencriptado = str
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    inputResult.value = stringDesencriptado;
}

function copy(){
    var strEncriptado = inputResult.value;
    navigator.clipboard.writeText(strEncriptado);
    alert("Copiado");
}
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopy.onclick = copy;