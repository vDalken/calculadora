let resultado = document.getElementById("resultado");

let igual = document.getElementById("equals");

const resetBtn = document.getElementById("reset-button");

const body = document.querySelector("body");

igual.addEventListener("click", () =>{
    resultado.value = eval(resultado.value.substring(0, resultado.value.length));
});

const buttonsWrapper = document.querySelector('.buttons-wrapper');

buttonsWrapper.addEventListener("click", (event) =>{
    const button = event.target;
    const buttonId = button.getAttribute("id");
    const buttonClass = button.getAttribute("class");
    if(!(buttonId === "equals") && !(buttonId === "reset-button") && !(buttonClass==="buttons-wrapper")){
        resultado.value += button.innerText;
    }
});

body.addEventListener("keydown", (event) =>{
    const key = event.key;
    const number = parseInt(key);
    if(typeof number === "number" && !isNaN(number)){
        resultado.value += number;
    }
    if(key === "+" || key === "-" || key === "*" || key === "." || key === "/"){
        resultado.value += key;
    }
    if(key === "Enter" || key === "="){
        resultado.value = eval(resultado.value.substring(0, resultado.value.length));
    }
    if(key === "Backspace"){
        resultado.value = resultado.value.substring(0,resultado.value.length-1);
    }
});

resetBtn.addEventListener("click", () =>{
    resultado.value = "";
});