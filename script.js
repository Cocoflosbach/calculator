//Write basic math functions for addition, subtraction, multiplication and division, clear, displayValue(store in a variable for later use),
//Write operate function that takes two numbers, performs a function and returns a number.
//store the first number and the operation chosen.
//return the final number when the user presses =
//When operate is called, populate the display with the value returned.

//User stories
//user should be able to string together several numbers and get the correct answer
//In a string of numbers, only a pair of twos should be evaluated first. The returned number from the first pair should then be added to the second pair.
//round decimals to a number so as not to overflow the screen.
//Clear should wipe out any existing datat and reset the calculator
//Display snarky error if user tries to divide by 0

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    alert(numberButton.id);
  });
});

/*const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});*/

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function clear() {}

function displayValue() {
  return;
}

const operate = () => {};
