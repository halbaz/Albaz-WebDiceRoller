// Get the roll button and dice value input field
const rollButton = document.getElementById("rollButton");
const diceValueInput = document.getElementById("diceValue");

// roll the dice and display the result
function rollDice() {
    // Generate a random number between 1 and 6
    const randomValue = Math.floor(Math.random() * 6) + 1;
    
    // Displayin the input field
    diceValueInput.value = randomValue;
}

// Automatically roll the dice when the page is loaded
window.onload = rollDice;

// Focus the roll button so that pressing enter rolls the dice again
rollButton.focus();

// Add click event listener to the roll button
rollButton.addEventListener("click", rollDice);
