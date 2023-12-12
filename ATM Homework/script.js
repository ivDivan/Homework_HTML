let initialBalance = 35000;

let withdrawal = confirm( ` Your initial balance is ${initialBalance}. Would you like to make a withdrawal?`);

if(withdrawal == false) {
    console.log("Why bother me then?");
}   else if(withdrawal == true) {
    let withdrawalAmount = prompt("What amount would you like to withdraw?");
    parseFloat(withdrawalAmount);
        if(withdrawalAmount > initialBalance) {
            console.log("Too much money mate. Check with the loans department...");
        }  else if (withdrawalAmount < initialBalance) {
            function newBalance() {
                let newBalance = initialBalance - withdrawalAmount
                console.log(`The amount withdrawn is: ${withdrawalAmount}`);
                console.log(`Your new balance is: ${newBalance}`)
            }

            newBalance()
        }
}





// switch(withdrawal) {
//     case false :
//         console.log("Why bother me then?");
//         break;
//     case true :
//         let withdrawalAmount = prompt("What amount would you like to withdraw?");
//         parseFloat(withdrawalAmount);
//         break;

//         let newBalance = initialBalance - withdrawalAmount

//         switch(withdrawalAmount) {
//             case withdrawalAmount > initialBalance :
//                 console.log("Too much money mate. Check with the loans department...");
//                 break;
//             case withdrawalAmount < initialBalance :
//                 console.log(`The amount withdrawn is: ${withdrawalAmount}`);
//                 console.log(`Your new balance is: ${newBalance}`);
                
//         }
// }

