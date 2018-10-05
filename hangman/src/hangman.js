function hangman() {
    const store = ['hangman', 'natasha', 'affection', 'heart', 'happiness'];
    const word = store[Math.floor(Math.random() * store.length)];
    let showedWord = '*'.repeat(word.length);
    let mistakes = 0;

    return letter => {
        if (!letter) {
            return {
                message: 'info',
                data: showedWord,
                word
            };
        }
        if (!(showedWord.includes('*'))) {
            return {
                message: 'win',
                data: showedWord,
                word
            };
        }
        if (letter.length !== 1) {
            return {
                message: 'error',
                word
            };
        }

        if (word.includes(letter)) {
            const indices = findAll(word, letter);

            indices.forEach(index => {
                showedWord = showedWord.replaceAt(index, letter);
            });

            if (!(showedWord.includes('*'))) {
                return {
                    message: 'win',
                    data: showedWord,
                    word
                };
            }
            return {
                message: 'hit',
                data: showedWord,
                word
            };
        }

        ++mistakes;
        if (mistakes > 4) {
            return {
                message: 'lost',
                word
            };
        }
        return {
            message: 'missed',
            data: mistakes,
            word
        };
    };
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function findAll(word, letter) {
    const matches = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            matches.push(i);
        }
    }
    return matches;
}

module.exports = {
    hangman
};
