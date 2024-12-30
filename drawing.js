//import { handleGuess, makeGuess, maxAttempts } from './handle-player.js'

// Hangman drawing stages
const hangmanStages = [
    `
     ------
     |    |
          |
          |
          |
          |
          |
    -----|-----`,
    `
     ------
     |    |
     O    |
          |
          |
          |
          |
    -----|-----`,
    `
     ------
     |    |
     O    |
     |    |
          |
          |
          |
    -----|-----`,
    `
     ------
     |    |
     O    |
    /|    |
          |
          |
          |
    -----|-----`,
    `
     ------
     |    |
     O    |
    /|\\   |
          |
          |
          |
    -----|-----`,
    `
     ------
     |    |
     O    |
    /|\\   |
    /     |
          |
          |
    -----|-----`,
    `
     ------
     |    |
     O    |
    /|\\   |
    / \\   |
          |
          |
    -----|-----`
];

// Function to display the hangman drawing based on wrong guesses
const displayHangman = (wrongGuesses) => {
    console.log(hangmanStages[wrongGuesses.length]);
}

export {displayHangman};