const calculator = {
    initialNumber: "0",
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    mathSymbols: ["+", "-", "*", "/"],
    equals: "=",

    firstNumber: null,
    secondNumber: null,
    operator: null,
}

const display = document.querySelector(".display");
display.textContent = calculator.initialNumber;
const buttonsContainer = document.querySelector(".buttons-container");


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
        operate();
    }
}

function resetDisplay() {
    display.textContent = calculator.initialNumber;
}

function addDigit(digit) {
    if(
        display.textContent === calculator.initialNumber ||
        calculator.operator !== null
    ) {
        display.textContent = digit; 
    } else {
        display.textContent += digit;
    }
}

function addOperator(operator) {
    if(calculator.firstNumber === null) {
    calculator.firstNumber = +display.textContent;
    }
    console.log(calculator.firstNumber, typeof calculator.firstNumber);
    if(operator === "*") {
        display.textContent = "×";
    } else if(operator === "/") {
        display.textContent = "÷"
    } else {
        display.textContent = operator;
    }
    calculator.operator = operator;
    console.log(calculator.operator)
}

function operate() {
    calculator.secondNumber = +display.textContent;
    console.log(calculator.secondNumber, typeof calculator.secondNumber);
    if(calculator.operator === "+") {
        calculator.firstNumber += calculator.secondNumber;
    } else if(calculator.operator === "-") {
        calculator.firstNumber -= calculator.secondNumber;
    } else if(calculator.operator === "*") {
        calculator.firstNumber *= calculator.secondNumber;
    } else if(calculator.operator === "/") {
        calculator.firstNumber /= calculator.secondNumber;
    }
    display.textContent = calculator.firstNumber;
    console.log(calculator.firstNumber);
}


buttonsContainer.addEventListener("click", calculate);