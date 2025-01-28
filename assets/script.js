const display = document.querySelector(".display");

const buttonsContainer = document.querySelector(".buttons-container");


function addToDisplay(event) {
    let firstNumber;
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
            display.textContent += event.target.textContent; 
        }

    if(event.target.id === "+") {
    firstNumber = display.textContent;
    console.log(firstNumber);
 }
}

buttonsContainer.addEventListener("click", addToDisplay);