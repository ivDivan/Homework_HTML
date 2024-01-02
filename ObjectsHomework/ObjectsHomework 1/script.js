let buttonSpeak = document.getElementById("btn");
let nameOfAnimal = document.getElementById("name")
let typeOfAnimal = document.getElementById("type");
let wordsOfAnimal = document.getElementById("words");

function animalSpeak(nameInput, typeInput, wordsInput) {
    this.animalName = nameInput;
    this.animalType = typeInput;
    this.animalWords = wordsInput;

    this.speak = function () {
        return `${this.animalName} the ${this.animalType}, says ${this.animalWords}`
    }
}

buttonSpeak.addEventListener("click", function() {

    let name = nameOfAnimal.value;
    let type = typeOfAnimal.value;
    let words = wordsOfAnimal.value;

    if(!name || !type || !words) {
        alert("Gimme all the data!!");
        return;
    }

    let whatDoesTheFoxSay = new animalSpeak(name, type, words);

    console.log(whatDoesTheFoxSay.speak());

    nameOfAnimal.value = ""
    typeOfAnimal.value = ""
    wordsOfAnimal.value = ""
})