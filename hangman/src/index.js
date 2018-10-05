/* eslint-disable no-console */

const { hangman } = require('./hangman.js');
const process = require('process');

const stdin = process.openStdin();
const game = hangman();
const { data: currentWord } = game();
console.log('\nThe word:', currentWord);
console.log('\nGuess a letter');

stdin.addListener('data', mess => {
    const letter = mess.toString().trim();
    const { message, data } = game(letter);

    switch (message) {
        case 'info': {
            console.log('\nThe word:', data);
            break;
        }
        case 'win': {
            console.log('\nYou win!');
            console.log('The word:', data);
            break;
        }
        case 'lost': {
            console.log('\nYou lost!');
            break;
        }
        case 'hit': {
            console.log('\nHit!');
            console.log('The word:', data);
            console.log('Guess a letter');
            break;
        }
        case 'missed': {
            console.log(`\nMissed, mistake ${data} out of 5.`);
            console.log('Guess a letter');
            break;
        }
        case 'error': {
            console.log('\nOops: You need to type ONE letter');
            console.log('Guess a letter');
            break;
        }
    }
});
