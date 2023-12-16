function dogAge() {
    let typeOfYears = confirm("Click \"OK\" to calculate dog years, click \"Cancel\" to calculate human years");
    switch(typeOfYears) {
        case true :
            let inputHuman = parseInt(prompt("How old is your dog in human years?"));
            let dogAge = inputHuman * 7;
            console.log(`Your dog is ${dogAge} years old in dog years.`);
            break;
        case false :
            let inputDog = parseInt(prompt("How old are you in dog years?"));
            let humanAge = Math.floor(inputDog/7);
            console.log(`You are ${humanAge} years old in human years.`); 
            break;
    }
}

    dogAge();
