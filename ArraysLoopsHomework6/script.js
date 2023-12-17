let first = ["Mile", "Kemal", "Sinan", "Shemsa"];
let last = ["Kitic", "Malovcic", "Sakic", "Suljakovic"];
let full = [];
let i = 0
let temp = ""



function merge(array1, array2) {
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


merge(first, last);