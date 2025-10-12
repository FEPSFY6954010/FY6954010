// Making Identifying button from HTML code

var button = document.getElementById("colour");

// Making a colour change function

function changeColour() {

    // Random colour generation
    var randomColour = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Button colour changed
    button.style.backgroundColor = randomColour;
}

// Adding event listener

button.addEventListener("click", changeColour);

// Making identifying button for URN html

var button1 = document.getElementById("hide");
var urn = document.getElementById("urn");


function hide() {
        urn.innerHTML = ""        
    }

    button1.addEventListener("click", hide)



