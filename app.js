//imports and DOM elements
import { answers } from './answers.js';

const rollButton = document.getElementById('roll-button');
const answerDisplay = document.getElementById('answer-area');
const userInput = document.getElementById('user-input');

//generic randomizer function
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

// set event listeners, put functions within
rollButton.addEventListener ('click', () => {
    const randomIndex = getRandomNumber(answers.length);  
    let randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
    if (userInput === '') {
        answerDisplay.textContent = 'are you there?';
    }
    else if (userInput) {
        userInput.value = '';
    }
});