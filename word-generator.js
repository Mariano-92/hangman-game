// Array of words for the game
const words = ['javascript', 'studio', 'html', 'css', 'frontend', 'backend', 'fullstack'];

// Function to obtain a random word
const randomWord = () => {
        const index = Math.floor(Math.random() * words.length);
        return words[index];
};


const secretWord = randomWord();


export {words, secretWord};
