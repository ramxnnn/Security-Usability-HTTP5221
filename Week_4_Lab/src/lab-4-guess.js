"use strict";

// This function has errors
// Your task is to find these errors with the help of Jasmine testing network
// After you find the errors, please, fix them here and re-run Jasmine tests

const guessNum = possibleNumber => {
    // Return early
    const isEmptyString = ['', null, undefined ].includes(possibleNumber);
    if (isEmptyString) return 'A value was not entered.';

    const isNotNumber = isNaN(possibleNumber);
    if (isNotNumber) return 'A number was not input.'; // i fixed the code by adding "."

    const secretNumber = 4;
    let result = 'Guess again.';

    // Conditions
    const isOutOfRange = possibleNumber < 1 || possibleNumber > 10; // I fixed this one, for testing the boundary values.
    const isCorrectGuess = secretNumber === parseInt(possibleNumber);

    // Validate
    if (isOutOfRange) {
        result = 'Way off!!!! Pick between 1 and 10.'; // i fixed this one by adding an extra "!" at the end to pass.
    } else if (isCorrectGuess) {
        result = 'You guessed it!';
    }

    return result;
}