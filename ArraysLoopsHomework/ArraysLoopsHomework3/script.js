let stringElements = ["My", "name", "is", "Prince", "and", "I", "am", "funky"];
let string = "";

function stringConcat(array) {
    for (let i = 0; i < array.length; i++) {
        string = string.concat(array[i], " ")
    }
    alert(string);
}


stringConcat(stringElements);