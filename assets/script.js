const display = document.querySelector(".display");

const buttonsContainer = document.querySelector(".buttons-container");

const calculator = {
    initialNumber: "0",
    firstNumber: null,
    secondNumber: null,
}

display.textContent = calculator.initialNumber;

//function triggered by the buttons
function addToDisplay(event) {
    //AC resets the display to the initial number (0)
    if(
        event.target.id === "AC"
    )   {
        display.textContent = calculator.initialNumber;
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
            if(
                display.textContent === calculator.initialNumber
            ) {
                display.textContent = event.target.textContent; 
            } else {
                display.textContent += event.target.textContent;
            }
        }

    if(
        event.target.id === "+" ||
        event.target.id === "−" ||
        event.target.id === "×" ||
        event.target.id === "÷"
    )   {

            calculator.firstNumber = display.textContent;
            console.log(calculator.firstNumber);
            display.textContent = event.target.textContent;
        }
}

buttonsContainer.addEventListener("click", addToDisplay);