let people = document.getElementById("peoples");
let ships = document.getElementById("ships");
let tableDiv = document.getElementById("result");
let loader = document.getElementById("loader");
let urlPeoples = "https://swapi.dev/api/people/?page=1"
let urlShips = "https://swapi.dev/api/starships/?page=1"
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
let paginationDiv = document.getElementById("pagination")

people.addEventListener("click", function() {
    fetchPeoples(urlPeoples);
})

ships.addEventListener("click", function() {
    fetchShips(urlShips);
})

let loaderShow = () => loader.style.visibility = "visible";
let loaderHide = () => loader.style.visibility = "hidden";

function fetchPeoples(urlApi) {
    loaderShow();
    fetch(urlApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        loaderHide();
        peopleStats(response.results);
        // showNext(response.next);
        // showPrevious(response.previous);
        paginationNumbers(response.count, response.next, response.previous);
    })
}

function fetchShips(urlApi) {
    loaderShow();
    fetch(urlApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        loaderHide();
        shipStats(response.results);
        // showNext(response.next);
        // showPrevious(response.previous);
        paginationNumbers(response.count, response.next, response.previous);
    })
}



function peopleStats(array) {

    tableDiv.innerHTML = "";
    let table = document.createElement("table");
    table.innerHTML = "";
    
    let tableHTML = "<tr>";
    const headers = ["Name", "Height", "Mass", "Gender", "Birth Year", "Appearances"];

    headers.forEach(header => {
        tableHTML += `<th>${header}</th>`
    });
    tableHTML += "</tr><tr>";

    array.forEach(element => {
        
        const rowData = [element.name, element.height, element.mass, element.gender, element.birth_year, element.films.length];

        rowData.forEach(data => {
            tableHTML += `<td>${data}</td>`;
        });
        tableHTML += "</tr>";
        
        // console.log(tableHTML);

        table.innerHTML = tableHTML;

        tableDiv.appendChild(table); 
    });
}

function shipStats(array) {

    tableDiv.innerHTML = "";
    let table = document.createElement("table");
    table.innerHTML = "";

    let tableHTML = "<tr>";
    const headers = ["Name", "Model", "Manufacturer", "Cost", "People Capacity", "Class"];

    headers.forEach(header => {
        tableHTML += `<th>${header}</th>`
    });
    tableHTML += "</tr><tr>";

    array.forEach(element => {

        let crew = undefined;
        let passengers = undefined;

        if(Number.isNaN(parseFloat(element.crew))) {
            crew = "0,0";
        } else {
            crew = element.crew;
        }
        
        if(Number.isNaN(parseFloat(element.passengers))){
            passengers = "0,0";
        } else {
            passengers = element.passengers
        }
        
        let capacity = parseFloat(crew.replaceAll(",","")) + parseFloat(passengers.replaceAll(",",""));

        const rowData = [element.name, element.model, element.manufacturer, element.cost_in_credits, capacity, element.starship_class];

        rowData.forEach(data => {
            tableHTML += `<td>${data}</td>`
        });
        tableHTML += "</tr>";

        table.innerHTML = tableHTML;

        tableDiv.appendChild(table);
    })
}

// function showNext(next) {
//     if(next === null) {
//         nextButton.style.visibility = "hidden";
//     } else {
//         nextButton.style.visibility = "visible"
//     }
//     nextButton.setAttribute("dataURL", next)
// }

// function showPrevious(previous) {
//     if(previous === null) {
//         previousButton.style.visibility = "hidden";
//     } else {
//         previousButton.style.visibility = "visible";
//     }
//     previousButton.setAttribute("dataURL", previous);
// }



// nextButton.addEventListener("click", function() {
//     let nextURL = nextButton.getAttribute("dataURL");
//     if(nextURL === null) return;
//     if(nextURL.includes("people")) {
//         fetchPeoples(nextURL);
//     } else if(nextURL.includes("ships")) {
//         fetchShips(nextURL);
//     }
// })


// previousButton.addEventListener("click", function() {
//     let previousURL = previousButton.getAttribute("dataURL");
//     if(previousURL === null) return;
//     if(previousURL.includes("people")) {
//         fetchPeoples(previousURL);
//     } else if(previousURL.includes("ships")) {
//         fetchShips(previousURL);
//     }
// })

function paginationNumbers(dataNumber, next, previous) {

    paginationDiv.innerHTML = "";

    let buttonNumbers = Math.ceil(parseFloat(dataNumber) / 10);

    let buttonGeneralURL = undefined

    


    if(next.includes("people") || previous.includes("people")) {
        buttonGeneralURL = "https://swapi.dev/api/people/?page=";
    } else if(next.includes("ships") || previous.includes("ships")) {
        buttonGeneralURL = "https://swapi.dev/api/starships/?page=";
    } 
    // else if(next === null && previous === null)

    for(i = 1; i < buttonNumbers; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        let buttonURL = buttonGeneralURL + i
        btn.setAttribute("dataURL", buttonURL);
        paginationDiv.insertBefore(btn, nextButton);
        console.log(buttonURL)

        
    }



}
