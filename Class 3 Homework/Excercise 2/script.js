let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", function() {
    getData();
})

function getData() {
    fetch("https://swapi.dev/api/people/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        printName(response.name);
        printStats(response.height, response.mass, response.eye_color, response.hair_color, result);
    })
}

function printName(name) {
    let header = document.createElement("h1");
    header.innerText = name
    result.appendChild(header);
}

function printStats(height, weight, eyes, hair, resultElement) {
    let table = document.createElement("table");
    table.style.border = "1px solid black";

    // let trHeader = document.createElement("tr");
    // let heightTh = document.createElement("th");
    // let weightTh = document.createElement("th");
    // let eyesTh = document.createElement("th");
    // let hairTh = document.createElement("th");

    // heightTh.innerText = "Height";
    // weightTh.innerText = "Weight";
    // eyesTh.innerHTML = "Eye Color";
    // hairTh.innerText = "Hair Color";

    // trHeader.appendChild(heightTh);
    // trHeader.appendChild(weightTh);
    // trHeader.appendChild(eyesTh);
    // trHeader.appendChild(hairTh);

    let tableHTML = "<tr>"
    const headers = ["Height", "Weight", "Eye Color", "Hair Color"];
    const rowData = [height, weight, eyes, hair];
    for(let header of headers){
        tableHTML += `<th>${header}</th>`;
    }
    tableHTML += "</tr><tr>";

    // table.appendChild(trHeader);

    // let tr = document.createElement("tr");
    // let heightTd = document.createElement("td");
    // let weightTd = document.createElement("td");
    // let eyesTd = document.createElement("td");
    // let hairTd = document.createElement("td");

    // heightTd.innerText = height;
    // weightTd.innerText = weight;
    // eyesTd.innerHTML = eyes;
    // hairTd.innerText = hair;

    // tr.appendChild(heightTd);
    // tr.appendChild(weightTd);
    // tr.appendChild(eyesTd);
    // tr.appendChild(hairTd);

    // table.appendChild(tr)

    for(let data of rowData) {
        tableHTML += `<td>${data}</td>`;
    }
    tableHTML += "</tr>"

    table.innerHTML = tableHTML;
    resultElement.appendChild(table);

}

