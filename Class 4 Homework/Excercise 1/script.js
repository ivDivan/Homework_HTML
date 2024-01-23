let inputNumber = document.getElementById("number");
let button = document.getElementById("btn");

function digits(number) {
    let num = Math.abs(parseFloat(number));
    let digits = num.toString().length
    console.log(`${number} has ${digits} digits`);
}

function evenOdd(number) {
    if(parseFloat(number) % 2 === 0){
        console.log(`${number} is an even number`);
    } else {
        console.log(`${number} is an odd number`);
    }
}

function positiveNegative(number) {
    if(parseFloat(number) > 0) {
        console.log(`${number} is a positive number`)
    } else if(parseFloat(number) === 0) {
        console.log(`${number} is zero`);
    } else {
        console.log(`${number} is a negative number`);
    }
}

function allTogetherNow(number) {

    if(!number) {
        console.log("I need a number");
        return;
    } else if(!Number.isInteger(parseFloat(number))) {
        console.log("I need an Integer")
        return;
    }

    digits(number);
    evenOdd(number);
    positiveNegative(number);
}

button.addEventListener("click", function() {
    allTogetherNow(inputNumber.value);
})