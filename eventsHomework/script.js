let rowsInput = document.getElementById("numberOfRows");
let columnsInput = document.getElementById("numberOfColumns");
let btnConstruct = document.getElementById("constructTable");
let divContent = document.getElementById("content");

btnConstruct.addEventListener("click", function() {

    let rows = parseInt(rowsInput.value);
    let columns = parseInt(columnsInput.value);

    if(!rows || !columns) {
        alert("I need data for the number of both rows and columns!!");
        return;
    }

    let table = document.createElement("table");

    for(r = 0; r < rows; r++) {

        let row = table.insertRow();

        for(c = 0; c < columns; c++) {
            let cell = row.insertCell();
            cell.textContent = `Row ${r+1}, Column ${c+1}`
            cell.style.border = "1px solid black";
        }    
    }

    divContent.appendChild(table);
    table.style.border = "2px solid black";
    
})