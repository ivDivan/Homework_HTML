$(document).ready(function(){

    let textInput = $("<input>", {
        type: "text",
        id: "textInput",
        placeholder: "Whaddaya say?"
    })

    let colorInput = $("<input>", {
        type: "text",
        id: "colorInput",
        placeholder: "What's your favourite color?"
    })

    let button = $("<button>Generate h1</button>")

    let messageHeader = $("<h3></h3>");

    let colorsArray = ["aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rebeccapurple","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","red","blue","purple","yellow","lime","white","silver","grey","black","maroon","green","olive"];

    $("body").append(textInput);
    $("body").append(colorInput);
    $("body").append(button);
    $("body").append(messageHeader);
    textInput.after("<br>");
    colorInput.after("<br>");
    button.after("<br>");
    messageHeader.after("<br>");

    button.click(function() {

        messageHeader.text("");

        let textValue = textInput.val();
        let colorValue = colorInput.val();
        let colorsError = true;

        if($.inArray(colorValue, colorsArray) === -1) {
            colorsError = false;
        }
        console.log(colorsError);

        if(!textValue || !colorsError) {
            messageHeader.text("Enter valid text and color!!");
            textInput.val("");
            colorInput.val("");
            return;
        }

        let resultHeader = $("<h1></h1>").text(textValue);
        resultHeader.css("color", colorValue);

        $("body").append(resultHeader);

        textInput.val("");
        colorInput.val("");
    })


})

