let authorName = document.getElementById("author");
let titleName = document.getElementById("title");
let readingStatusRadio = document.getElementsByName("readingStatus");
let buttonList = document.getElementById("btn");
let readingStatus = ""
let list = document.getElementById("ul");
let readingStatusText = ""


buttonList.addEventListener("click", function() {
    

    for(let i = 0; i < readingStatusRadio.length; i++) { 
        if(readingStatusRadio[i].checked) {
            readingStatus = readingStatusRadio[i].value;
            break;
        } else {
            readingStatus = false;
        }
    }

    let author = authorName.value;
    let title = titleName.value

    console.log(`${author} ${title} ${readingStatus}`);

    if(!author || !title || !readingStatus) {
        alert("I need all the data!!!");
        return;
    }

    // ne bev siguren dali vo radio button vo value moze vakov string da se stavi
    // otposle mi tekna, pa me mrzese da probuvam, zatoa so if
    // ke si probam posle
    if(readingStatus === "hasRead") {
        readingStatusText = "Aready read:"
    } else if(readingStatus === "onList") {
        readingStatusText = "Still on my reading list:"
    }

    console.log(readingStatusText);

    function Book(titleInput, authorInput, statusInput) {
        this.title = titleInput;
        this.author = authorInput;
        this.status = statusInput;

        this.bookStatus = function() {
            return `${statusInput} ${titleInput} by ${authorInput}`;
        }
    }

    let newBook = new Book(title, author, readingStatusText);

    let addBook = document.createElement("li");
    addBook.innerText = newBook.bookStatus();
    list.appendChild(addBook);

    authorName.value = "";
    titleName.value = "";
    for(i = 0; i < readingStatusRadio.length; i++) {
        readingStatusRadio[i].checked = false;
    }
    })
