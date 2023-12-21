let numbers = [3, 7, 23, 33, 42, 73]
let sum = 0

let ul = document.createElement("ul");
document.body.appendChild(ul);

let paragraph = document.createElement("p");
document.body.appendChild(paragraph);

for(let number of numbers) {
    ul.innerHTML += `<li>${number}</li>`
    sum += number
}

for(let number of numbers.slice(0,-1)) {
    paragraph.innerText += `${number} + `
}

for(let number of numbers.slice(-1)) {
    paragraph.innerText += `${number} = `
}

paragraph.innerText += ` ${sum}`
