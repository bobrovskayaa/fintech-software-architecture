const assert = require('assert');
const { hangman } = require('../src/hangman.js');

describe('Hangman', function() {
    describe('#letter a', function() {
        it('we should guess letter \'a\'', function() {
            const game = hangman();
            let { message }   = game('a');
            assert.equal(message, 'hit');
        });
    });

    describe('expect win', function() {
        it('word \'natasha\'', function() {
            const hiddenWord = 'natasha';
            while (true) {
                const game = hangman();
                const { word }  = game();
                if (hiddenWord !== word) {
                    continue;
                }

                game('n');
                game('a');
                game('t');
                game('s');
                const { data } = game('h');
                assert.equal(data, hiddenWord);
                break;
            }
        });
    });

    describe('expect lost', function() {
        it('word \'natasha\'', function() {
            const hiddenWord = 'natasha';
            while (true) {
                const game = hangman();
                const { word }  = game();
                if (hiddenWord !== word) {
                    continue;
                }

                game('q');
                game('w');
                game('e');
                game('r');
                const { data } = game('y');
                assert.equal(data, 5);
                break;
            }
        });
    });
});
