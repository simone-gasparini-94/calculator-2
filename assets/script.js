const display = document.querySelector(".display");

const buttonsContainer = document.querySelector(".buttons-container");

const calculator = {
    initialNumber: "0",
    firstNumber: null,
    secondNumber: null,
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    mathSymbols: ["+", "−", "×", "÷"],
    equals: "=",
}

display.textContent = calculator.initialNumber;

function addToDisplay(event) {
    //AC resets the display to the initial number (0)
    if(event.target.id === "AC")   {
        display.textContent = calculator.initialNumber;
    }

    if(calculator.digits.includes(event.target.id))   {   
        if(
            display.textContent === calculator.initialNumber ||
            calculator.mathSymbols.includes(display.textContent)
        ) {
            display.textContent = event.target.textContent; 
        } else {
            display.textContent += event.target.textContent;
        }
    }

    if(calculator.mathSymbols.includes(event.target.id))   {
        calculator.firstNumber = +display.textContent;
        console.log(calculator.firstNumber, typeof calculator.firstNumber);
        display.textContent = event.target.textContent;
    }

    if(event.target.id === calculator.equals) {
        calculator.secondNumber = +display.textContent;
        console.log(calculator.secondNumber, typeof calculator.secondNumber);
    }
}

buttonsContainer.addEventListener("click", addToDisplay);