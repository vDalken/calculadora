let resultado = document.getElementById("resultado");

let igual = document.getElementById("equals");

const resetBtn = document.getElementById("reset-button");

igual.addEventListener("click", () =>{
    resultado.value = eval(resultado.value.substring(0, resultado.value.length));
});

const buttonsWrapper = document.querySelector('.buttons-wrapper');

buttonsWrapper.addEventListener("click", (parent) =>{
    const button = parent.target;
    if(button.innerText!=="=" && button.innerText!=="reset"){
        resultado.value += button.innerText;
    }
});

resetBtn.addEventListener("click", () =>{
    resultado.value = "";
});