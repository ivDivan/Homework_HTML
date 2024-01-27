let inputFontSize = document.getElementById("fontSize");
let inputColor = document.getElementById("color");
let button = document.getElementById("btn");
let result = document.getElementById("resultElement");

let textColorFunc = (resultElement, color) => resultElement.style.color = color;
    

let fontSizeFunc = (resultElement, size) => resultElement.style.fontSize = `${size}px`;


let buttonClick = () => {
    let fontSize = inputFontSize.value;
    let textColor = inputColor.value;

    if(!fontSize) {
        result.style.fontSize = "24px";
    } else if(!textColor) {
        result.style.color = "black";
    }

    textColorFunc(result, textColor);
    fontSizeFunc(result, fontSize);
}

button.addEventListener("click", () => {
    buttonClick();
})