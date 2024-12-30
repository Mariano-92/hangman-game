const playGame = (word) => {
    let progress = generateBlanks(word);
    let wrongGuesses = [];
    let gameOver = false;
    const maxAttempts = 6;

    console.log('Secret word selected: ', word);
    console.log('Initial progress: ', progress.join(' '));

    document.getElementById('word').innerText = progress.join(' '); // Initial word state
    displayHangman(wrongGuesses);

    console.log('Welcome to Hangman!');

    // Game loop
    while (!gameOver) {
        console.log('Current Progress: ', progress.join(' ')); // Debug log

        // Check if the game is over (max attempts or win)
        if (wrongGuesses.length >= maxAttempts) {
            console.log('⛔ Game over! You have reached the maximum attempts.');
            gameOver = true;
            break;
        }

        if (!progress.includes('_')) {
            console.log('🎉 You won! The word was: ', word);
            gameOver = true;
            break;
        }

        // Prompt user for input
        const guess = prompt('Enter a letter').toLowerCase();

        // Input validation
        if (!guess || guess.length !== 1 || !/^[a-z]$/.test(guess)) {
            console.log('Please enter a single valid letter.');
            continue; // Skip this loop iteration and prompt again
        }

        // Handle the guess: Check if correct or wrong
        console.log('Guess received: ', guess); // Debug log
        if (handleGuess(guess, word, progress)) {
            console.log('Correct guess: ', progress.join(' '));
        } else {
            wrongGuesses.push(guess);
            console.log('Wrong guess! Attempts left: ', maxAttempts - wrongGuesses.length);
            displayHangman(wrongGuesses); // Update hangman
            updateAttemptsLeft(wrongGuesses, maxAttempts); // Update attempt counter
        }

        // Update the progress display in the DOM
        document.getElementById('word').innerText = progress.join(' ');

        // Check if the game is won (all underscores are filled)
        if (!progress.includes('_')) {
            console.log('🎉 You won! The word was: ', word);
            gameOver = true;
        }
    }

    // Show the restart button after game ends
    if (gameOver) {
        showRestartButton();
    }

    console.log('Current progress: ', progress.join(' '));
    console.log('Wrong guesses so far: ', wrongGuesses.join(', '));
};
