let inputArray = [2, 5, 7, "rainbow", 100];
let sumOfArray = 0

function sumArray(array) {
    for (let i=0; i < array.length; i++) {
        sumOfArray += array[i]
    }
    alert(`The sum of the array is: ${sumOfArray}`)
}

function validateNumber(array) {
    for (let i=0; i < array.length; i++) {
        if(typeof(array[i]) !== "number") {
            alert(`Error, ${array[i]} is not a number`);
            break;
        }
    }
}

validateNumber(inputArray);
sumArray(inputArray);