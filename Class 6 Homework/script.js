let dataURL = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let button = document.getElementById("btn");

button.addEventListener("click", () => dataFetch(dataURL));

function dataFetch(apiURL) {
    fetch(apiURL)
    .then(response => response.json())
    .then(response => {
        console.log("All students: ", response);
        averageGradeThree(response)
        femaleGradeFive(response);
        maleSkopjeAge(response);
        femaleAgeGrade(response);
        maleNameGrade(response);
    })
}

function averageGradeThree(array) {

    let gradeArr = array.filter(obj => obj.averageGrade > 3);

    console.log("Students with average grade higher than 3: ", gradeArr);
}

function femaleGradeFive(array) {

    let femaleFiveArr = array.filter(obj => obj.gender === "Female").filter(obj => obj.averageGrade === 5).map(({firstName}) => ({firstName}));

    console.log("First names of female students with average grade of 5: ", femaleFiveArr);
}

function maleSkopjeAge(array) {

    let maleSkopjeAgeArr = array.filter(obj => obj.gender === "Male").filter(obj => obj.city === "Skopje").filter(obj => obj.age >= 18).map(({firstName, lastName}) => ({firstName, lastName}));
    
    console.log("Full names of male students from Skopje, over 18: ", maleSkopjeAgeArr);
}

function femaleAgeGrade(array) {

    let femaleAgeGradeArr = array.filter(obj => obj.gender === "Female").filter(obj => obj.age >= 24).map(({averageGrade}) => ({averageGrade}));

    console.log("Average grades of female students over 24: ", femaleAgeGradeArr);
}


// Vo slednava funkcija malce fakjav krivini, verovatno .map() sakavte da koristime, pa da ja najdeme prvata bukva od imeto, ama moze i so filter so capital "B" da se najde, ako e so golema - mora da e pocetna. :P 
// Podole pocnav so .map() da se igram, ama mi tekna deka odma moze vaka da se najde prvata bukva. Mozda podobro bi bilo u zadacava na poslednata bukva od imeto da se bara, da ne moze vakov shortcut da se naprai...
function maleNameGrade(array) {

    let maleGradeNameArr = array.filter(obj => obj.averageGrade >= 2).filter(obj => obj.firstName.includes("B")).filter(obj => obj.gender === "Male");

    console.log("Male students whose first name starts with a B, with grades over 2: ", maleGradeNameArr)
}



// function nameSplit(array) {
    
//     let nameSplit = array.map(obj => obj.firstName.split(""));

//     console.log(nameSplit);
// }