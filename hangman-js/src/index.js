/* eslint-disable no-console */

const { hangman } = require('./hangman.js');

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
        case 'hit': {
            if (!(data.includes('*'))) {
                console.log('\nYou win!');
                break;
            }
            console.log('\nHit!');
            console.log('The word:', data);
            console.log('Guess a letter');
            break;
        }
        case 'win': {
            console.log('\nYou win!');
            break;
        }
        case 'missed': {
            if (data > 4) {
                console.log('\nYou lost!');
            } else {
                console.log(`\nMissed, mistake ${data} out of 5.`);
                console.log('Guess a letter');
            }
            break;
        }
        case 'error': {
            console.log('\nOops: You need to type ONE letter');
            console.log('Guess a letter');
            break;
        }
    }
});
