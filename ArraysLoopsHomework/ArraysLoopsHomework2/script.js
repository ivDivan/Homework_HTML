let inputArray = [2, "gondola", 5, true, 7, 100,];


function sumArray(array) {
    let sumOfArray = 0
    validateNumber(array);
    if(check === true) {
        for (let i=0; i < array.length; i++) {
            sumOfArray += array[i]
        }
    alert(`The sum of the array is: ${sumOfArray}`)
    }   else if(check === false) {
            alert(`Error, ${element} is not a number`);
    }
}

function validateNumber(array) {
    check = ""
    for (let i=0; i < array.length; i++) {
        if(typeof(array[i]) !== "number") {
            check = false;
            element = array[i];
            break;
        } else {
            check = true;
        }
    }
}

sumArray(inputArray);