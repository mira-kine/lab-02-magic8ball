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
    if (userInput.value !== '') {
        const randomIndex = getRandomNumber(answers.length);  
        let randomAnswer = answers[randomIndex];
        answerDisplay.textContent = randomAnswer;
        userInput.value = '';
    }
    
    else if (userInput.value === '') {
        answerDisplay.textContent = 'are you there';
    }
});