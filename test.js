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

var hidebutton = document.getElementById("hide");
var showbutton = document.getElementById("show");
var urn = document.getElementById("urn");


// Text change function
function urnhide() {
    urn.innerHTML = "";
}

hidebutton.addEventListener("click", urnhide);

function urnshow() {
    urn.innerHTML = "Student URN: 6954010";
}

showbutton.addEventListener("click", urnshow);

if (urn.innerHTML = "") {
    alert("The URN is already hidden!")
} else {
    alert("The URN is already shown!")
}




