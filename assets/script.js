const display = document.querySelector(".display");

const buttonsContainer = document.querySelector(".buttons-container");

let initialNumber = "0";
display.textContent = initialNumber;

//function triggered by the buttons
function addToDisplay(event) {
    //AC resets the display to the initial number (0)
    if(
        event.target.id === "AC"
    )   {
        display.textContent = initialNumber;
    }

    if(
        event.target.id === "0" ||
        event.target.id === "1" ||
        event.target.id === "2" ||
        event.target.id === "3" ||
        event.target.id === "4" ||
        event.target.id === "5" ||
        event.target.id === "6" ||
        event.target.id === "7" ||
        event.target.id === "8" ||
        event.target.id === "9" 
    )   {   
            //if condition that deletes the first 0
            if(display.textContent === initialNumber) {
                display.textContent = event.target.textContent; 
            } else {
                display.textContent += event.target.textContent;
            }
        }

    if(
        event.target.id === "+" ||
        event.target.id === "-" ||
        event.target.id === "×" ||
        event.target.id === "÷"
    )   {
            firstNumber = display.textContent;
            display.textContent = firstNumber + " " + event.target.textContent;
        }
}

buttonsContainer.addEventListener("click", addToDisplay);