let nameOfRecipe = document.getElementById("nameOfRecipe");
let numberOfIngredients = document.getElementById("numberOfIngredients");
let btnNameNumber = document.getElementById("btnNN");
let divContent = document.getElementById("content");

btnNameNumber.addEventListener("click", function() {

    let name = nameOfRecipe.value;
    let number = numberOfIngredients.value;

    if(!name || !number) {
        alert("I need the data to continue!!")
        return;
    }

    let arrayLength = parseInt(number);
    // console.log(arrayLength);
    let ingredientsNumber = Array.apply(null, Array(arrayLength));
    // console.log(ingredientsNumber);
    let arrayIngredients = []

    for(i = 0; i < ingredientsNumber.length; i++) {
        let newIngredient = prompt(`Please input ingredient ${i+1}`);
        arrayIngredients.push(newIngredient);
    }
    // console.log(arrayIngredients);

    // Podole ne mozev da se povikam na divContent, za appendChild da napravam, pa morav so getElementByID
    // Eventualno da go deklariram vo funkcijata div-ot, a ne vo global scope??
    let recipeHeader = document.createElement("h1");
    recipeHeader.innerText = `Today's recipe is ${name}`;
    document.getElementById("content").appendChild(recipeHeader);

    let recipeSubheader = document.createElement("h3");
    recipeSubheader.innerText = `To make ${name}, we will need the following ingredients:`
    document.getElementById("content").appendChild(recipeSubheader);

    let list = document.createElement("ul");
    document.getElementById("content").appendChild(list);

    for(let ingredient of arrayIngredients) {
        list.innerHTML += `<li>${ingredient}</li>`
    }
})

// Sakav mnogu pokomplicirano da ja resam zadacava, edno nedela-dve me mucese
// Prvin kreirav novi inputi za sekoj ingredient i nov button so prviot eventListener, pa posle sakav so niv da operiram
// Imam tuka nekolku prasanja, a ke se pomucam uste malce, otkoga ke gi zavrsam site domasni, pa posle ke ve cimam i okolu ova...