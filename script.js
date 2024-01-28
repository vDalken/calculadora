let resultado = document.getElementById("resultado");

let igual = document.getElementById("equals");

const resetBtn = document.getElementById("reset-button");

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

resetBtn.addEventListener("click", () =>{
    resultado.value = "";
});