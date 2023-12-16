let num = 33;
let string = "33";
let boolean = false;
let object = {};
let a;

function dataType(data) {
    let result = typeof data;
    console.log("The data is a", result);
}

dataType(num);
dataType(string);
dataType(boolean);
dataType(object);
dataType(a);