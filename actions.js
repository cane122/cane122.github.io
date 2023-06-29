function checkGuess() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guessInput = document.getElementById("guessInput");
    var guessResult = document.getElementById("guessResult");

    var userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess)) {
        guessResult.textContent = "Invalid input. Please enter a number.";
    } else {
        if (userGuess === randomNumber) {
            guessResult.textContent = "Congratulations! You guessed the correct number.";
        } else if (userGuess < randomNumber) {
            guessResult.textContent = "Too low. Try again!";
        } else {
            guessResult.textContent = "Too high. Try again!";
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('text-container');

    fetch('text.txt')
        .then(response => response.text())
        .then(data => {
            textContainer.textContent = data;
        })
        .catch(error => {
            textContainer.textContent = 'Error: ' + error;
        });
});
