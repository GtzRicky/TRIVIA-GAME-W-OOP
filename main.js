import Request from './classes/Request.js'
import UI from './classes/UI.js'
import Answers from './classes/Answers.js'

Request.accessCategories()
    .then((response) => response.json())
    .then((data) => UI.printCategories(data.trivia_categories));


const form = document.querySelector('#form-questions');

let answersRequested = [];
let questionsRequested = document.querySelector('#total-questions').value;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then((response) => response.json())
        .then((data) => {
            UI.printData(data.results);
            answersRequested = [...Answers.countAnswers(data.results)];;
            console.log(answersRequested);
        });
})


const verify = document.querySelector('#verify');

verify.addEventListener('submit', (event) => {
    event.preventDefault();
    Answers.verifyAnswers(answersRequested, questionsRequested);
})