let input = prompt("How old is your dog in human years?");
let age = parseInt(input);

function dogAge() {
    let dogAge = age*7
    console.log(`Your dog is ${dogAge} years old in dog years`);
}

dogAge();


let humanYears = confirm("Do you know your dog years?");

if(humanYears == false) {
    console.log("Your loss..");
} 

else if(humanYears == true) {
    let input1 = prompt("How old are you in dog years?");
    let age1 = parseInt(input1);

    function humanAge() {
        let humanAge = Math.floor(age1/7);
        console.log(`Your are ${humanAge} years old in human years`);
    }

    humanAge();
}