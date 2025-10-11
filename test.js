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

var button2 = document.getElementById("urn");

// Text change function
function urnClear() {
    button2.innerHTML = '';
}

button1.addEventListener("click", urnClear)



