let mainTitle = document.querySelector("#myTitle");
let firstParagrapgh = mainTitle.nextElementSibling;
let secondParagraph = document.getElementsByClassName("second")[0];
// let text = document.getElementsByTagName("text")[0];
let divText = document.getElementsByClassName("anotherDiv")[0];
let text = divText.querySelector(":nth-child(2)");
// let text = divText.firstChild.nextSibling;
let headerBig = document.getElementsByTagName("h1")[1];
let headerSmall = document.querySelector("h3");





mainTitle.innerText = "What's up doc?";
firstParagrapgh.innerText = "You're dethpicable!!";
secondParagraph.innerText = "I thought a taw a puddy tat.";
text.innerText = "Thufferin' thuccotash!!";
headerBig.innerText = "When I say whoa, I mean WHOA!!";
headerSmall.innerText = "Th-th-that's all, folks!"

