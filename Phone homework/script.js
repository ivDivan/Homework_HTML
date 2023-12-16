var phonePrice = 119.95;
var taxRate = 5;
var numberOfPhones = 30;

var fullPrice = ((phonePrice*taxRate/100)+phonePrice)*numberOfPhones;

console.log(fullPrice);