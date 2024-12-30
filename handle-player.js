import { generateBlanks } from "./blank-spaces.js";
import {words, secretWord} from "./word-generator.js"

let progress = generateBlanks(secretWord);

// Check if the guessed letter is in the word
const handleGuess = (letter, word, progress) => {
    let correct = false;

    for ( let i = 0; i < word.length; i++ ) {
        if ( word[i] === letter && progress[i] === '_' ) {
            progress[i] = letter;
            correct = true;
        }
    }
    return correct; // Return true if the guess was correct
}

// Test

// let guessedLetter = 'b'; // Change this to test with different letters
//  if ( handleGuess(guessedLetter, secretWord, progress)) {
//     console.log('Correct guess: ', progress.join(' '));
//  } else {
//     console.log('Wrong guess!');
//  };



//Wrong guess
// let wrongGuesses = [];
// let maxAttempts = 6;

//Handle guesses and check for game over
// const makeGuess = (letter, word, progress) => {
//     if (progress.includes(letter) || wrongGuesses.includes(letter)) {
//         console.log('You already guessed that letter!');
//         return;
//     }

//     if (handleGuess(letter, word, progress)) {
//         console.log('Correct guess: ', progress.join(' '));
//         if (!progress.includes('_')) {
//             console.log('🎉 You won! The word was: ', word);
//         }
//     } else {
//        wrongGuesses.push(letter);
//        console.log('Wrong guess! Attempt left: ', maxAttempts - wrongGuesses.length);
//        console.log('Wrong guesses so far: ', wrongGuesses.join(', '));
//        if (wrongGuesses.length >= maxAttempts) {
//             console.log('⛔Game over!⛔ The word was: ', word);
//        }
        
//     }
// };

//Test
// makeGuess('a', secretWord, progress); // Try correct and incorrect guesses
// makeGuess('z', secretWord, progress);
// makeGuess('a', secretWord, progress);// Test repeated guess

export {handleGuess};