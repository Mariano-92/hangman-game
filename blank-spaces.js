import {words, secretWord} from "./word-generator.js"

// Display blank spaces for the secret word
const generateBlanks = (words) => {
        return Array(words.length).fill('_');
};


// Test

// console.log('Initial progress: ', progress.join(' '));

export { generateBlanks };

