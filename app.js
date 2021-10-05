// import functions and grab DOM elements

import { answers } from './answers.js';


const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};
  // to generate a random answer
const randomIndex = getRandomNumber(colors.length);
console.log(randomIndex);

const randomAnswer = getRandomNumber(answers.length);
console.log(answers[randomAnswer]);


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new states