import { displayHangman } from "./drawing.js";
import { maxAttempts } from "./handle-player.js";
import { secretWord } from "./word-generator.js";
import { playGame } from "./play-game.js";

//Function to restart game

const restartGame = () => {
    // Reset the game state and UI
    // For example, clear wrong guesses, reset progress, and attempts 
    // Reset variables or state in the game module
    document.getElementById('word').innerText = '';
    document.getElementById('attemptsLeft').innerText = '';
    displayHangman([]);
    playGame(secretWord);
};

const showRestartButton = () => {
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'inline-block';
    restartButton.addEventListener('click', restartGame);
};

const updateAttemptsLeft = (wrongGuesses, maxAttempts) => {
    console.log(`Attempts left: ${maxAttempts - wrongGuesses.length}`);
    document.getElementById('attemptsLeft').innerText = `Attempts left: ${maxAttempts - wrongGuesses.length}`;
}


export { restartGame, showRestartButton, updateAttemptsLeft };
