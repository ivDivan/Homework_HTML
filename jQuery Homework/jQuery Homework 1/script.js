$(document).ready(function() {

    let input = $("<input>", {
        type: "text",
        id: "messageInput",
        placeholder: "Tell me your name!!"
    })

    let button = $("<button>Create Message</button>")
    
    
    $("body").append(input);
    $("body").append(button);
    button.after("<br>");
    

    button.click(function() {
        let inputValue = $("input").val();

        if(!inputValue){
            alert("Gimme your name, pardner...")
            return;
        }
        
        let header = $("<h1></h1>", {
        text: `There's a new sherif in town, ${inputValue}!!`
       })
       $("body").append(header);

       input.val("")
    })
})


