const calculator = {
    initialNumber: "0",
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    mathSymbols: ["+", "−", "×", "÷"],
    equals: "=",

    firstNumber: null,
    secondNumber: null,
    operator: null,
}

const display = document.querySelector(".display");
display.textContent = calculator.initialNumber;
const buttonsContainer = document.querySelector(".buttons-container");

// Main function: event handler of the clicks of the buttons
// that incorporates the various functions

function calculate(event) {
    if(event.target.id === "AC")   {
       resetDisplay();
    }

    if(calculator.digits.includes(event.target.id))   {   
        addDigit(event.target.id);
    }

    if(calculator.mathSymbols.includes(event.target.id))   {
        addOperator(event.target.id);
    }

    if(event.target.id === calculator.equals) {
        addEquals();
    }
}

function resetDisplay() {
    display.textContent = calculator.initialNumber;
}

function addDigit(digit) {
    if(
        display.textContent === calculator.initialNumber ||
        calculator.mathSymbols.includes(display.textContent)
    ) {
        display.textContent = digit; 
    } else {
        display.textContent += digit;
    }
}

function addOperator(operator) {
    calculator.firstNumber = +display.textContent;
    console.log(calculator.firstNumber, typeof calculator.firstNumber);
    display.textContent = operator;
}

function addEquals() {
    calculator.secondNumber = +display.textContent;
    console.log(calculator.secondNumber, typeof calculator.secondNumber);
    calculator.firstNumber += calculator.secondNumber;
    display.textContent = calculator.firstNumber;
}


buttonsContainer.addEventListener("click", calculate);