let resultado = document.getElementById("resultado");

//storing html collection in this array
const buttonsHTMLCollection = document.getElementsByTagName("button");

//converting the collection to array
const buttonsArray = Array.from(buttonsHTMLCollection);

//for each button
buttonsArray.forEach((button) => {
    //adding event for each button
    button.addEventListener("click", () => {
        resultado.value += button.innerText;
    });
});

let igual = document.getElementById("equals");
igual.addEventListener("click", () =>{
    resultado.value = eval(resultado.value.substring(0, resultado.value.length -1));
});