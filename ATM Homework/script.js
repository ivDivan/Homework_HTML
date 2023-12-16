let initialBalance = 35000;

let withdrawal = confirm( ` Your balance is ${initialBalance}. Would you like to make a withdrawal?`);

if(withdrawal == false) {
    console.log("Why bother me then?");
}   else if(withdrawal == true) {
    let withdrawalAmount = parseFloat(prompt("What amount would you like to withdraw?"));
        if(withdrawalAmount > initialBalance) {
            console.log("Too much money mate. Check with the loans department...");
        }  else if (withdrawalAmount <= initialBalance) {
            function newBalance() {
                let newBalance = initialBalance - withdrawalAmount
                console.log(`The amount withdrawn is: ${withdrawalAmount}`);
                console.log(`Your new balance is: ${newBalance}`)
            }
            newBalance()
        } else {
            console.log("Bah, why waste my time? Give me an amount!!")
        }
}


