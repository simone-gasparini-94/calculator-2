const calculator = {
    initialNumber: "0",
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    mathSymbols: ["+", "-", "*", "/", "x", "÷"],
    equals: "=",
    ac: "AC",
    c: "C",
    dot: ".",

    firstNumber: null,
    secondNumber: null,
    operator: null,
}

const display = document.querySelector(".display");
display.textContent = calculator.initialNumber;
const buttonsContainer = document.querySelector(".buttons-container");


function calculate(event) {
    if(event.target.id === calculator.ac)   {
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

    if(event.target.id === calculator.dot) {
        addFloat()
    }
}

function resetDisplay() {
    display.textContent = calculator.initialNumber;
    calculator.firstNumber = null;
    calculator.secondNumber = null;
    calculator.operator = null;
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
    if(calculator.operator !== null) {
        operate();
    }

    if(calculator.firstNumber === null) {
    calculator.firstNumber = +display.textContent;
    }

    if(operator === "*") {
        display.textContent = "×";
    } else if(operator === "/") {
        display.textContent = "÷"
    } else {
        display.textContent = operator;
    }
    calculator.operator = operator;
}

function operate() {
    if(calculator.firstNumber === null) {
        calculator.firstNumber = +display.textContent;
    };

    if(calculator.mathSymbols.includes(display.textContent) ||
       calculator.operator === null) {
        calculator.secondNumber = 0;
    } else {
    calculator.secondNumber = +display.textContent;
    };

    if(calculator.operator === "+") {
        calculator.firstNumber += calculator.secondNumber;
    } else if(calculator.operator === "-") {
        calculator.firstNumber -= calculator.secondNumber;
    } else if(calculator.operator === "*") {
        calculator.firstNumber *= calculator.secondNumber;
    } else if(calculator.operator === "/") {
        calculator.firstNumber /= calculator.secondNumber;
    }

    if(calculator.firstNumber % 1 !== 0) {
        display.textContent = calculator.firstNumber.toFixed(2);
    } else {
        display.textContent = calculator.firstNumber;
    }
    
    calculator.secondNumber = null;
    calculator.operator = null;
}

function addFloat() {
   if(!display.textContent.includes(".")) {
        display.textContent += ".";
   }
}


buttonsContainer.addEventListener("click", calculate);