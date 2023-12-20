let first = ["Mile", "Kemal", "Sinan", "Shemsa"];
let last = ["Kitic", "Malovcic", "Sakic", "Suljakovic"];
let full = [];
let i = 0
let temp = ""



function merge(array1, array2) {
    if(array1.length !== array2.length) {
        alert(`Error, the arrays don't have the same length!!!`)
    } else {
    while(i < array1.length || i < array2.length) {
        temp = `${i+1}. ${array1[i]} ${array2[i]}`;
        // Moze i vaka:
        // temp = ""
        // temp = temp.concat(i+1, ".", array1[i], " ", array2[i]);
        full.push(temp);
        i++
    }
    console.log(full);
    }
}


merge(first, last);

// Da, da, go utnav operatorot vo while statementot, 
// namesto so || trebase so &&, pa nema da prodolzi ako edniot array e pomal od drugiot,
// samo nema da dava Error message...

// let first = ["Mile", "Kemal", "Sinan", "Shemsa"];
// let last = ["Kitic", "Malovcic", "Sakic", "Suljakovic", "Ramadanovski"];
// let full = [];
// let i = 0
// let temp = ""



// function merge(array1, array2) {
//     while(i < array1.length && i < array2.length) {
//         temp = `${i+1}. ${array1[i]} ${array2[i]}`;
//         full.push(temp);
//         i++
//     }
//     console.log(full);
// }


// merge(first, last);