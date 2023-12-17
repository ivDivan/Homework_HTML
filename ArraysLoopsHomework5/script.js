let fullArray = ["turkey", 3, "dog", 6, true, 73, 2,];
let max = 0;
let min = 0;
let sum = 0;
let numArray = []

function findValues(array) {
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) !== "number") {
            continue;
        } else {
            numArray.push(array[i]);
        }
        sum += array[i];
    }
    max = Math.max(...numArray);
    min = Math.min(...numArray);
    alert(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
}

findValues(fullArray);