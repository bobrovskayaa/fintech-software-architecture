#!/usr/bin/python
import re
import random

store = ['hangman', 'natasha', 'success', 'glory', 'happiness']

word = store[random.randint(1, len(store))]
showed_word = '*' * len(word)
mistakes = 0

while mistakes < 5:
    if not (re.search('\*', showed_word)):
        break
    print('\nThe word:', showed_word)
    print('\nGuess a letter')
    letter = input()
    if (len(letter) != 1):
        print('\nOops: You need to type ONE letter')
        continue
    if (re.search(letter, word)):
        print('\nHit!')
        indices = [m.start() for m in re.finditer(letter, word)]
        for i in indices:
            showed_word = showed_word[:i] + letter + showed_word[i+1:]
    else:
        mistakes += 1
        print('\nMissed, mistake %d out of 5.' % mistakes)

if (mistakes == 5):
    print('\nYou lost!')
else:
    print('\nYou won!')