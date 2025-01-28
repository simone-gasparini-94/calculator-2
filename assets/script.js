const display = document.querySelector(".display");

const buttonsContainer = document.querySelector(".buttons-container");

function addToDisplay(event) {
    display.textContent = event.target.textContent;
}

buttonsContainer.addEventListener("click", addToDisplay);