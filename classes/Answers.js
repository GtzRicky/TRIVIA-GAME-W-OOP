export default class Answers {

    static countAnswers(reagents) {
        const count = [];
        reagents.forEach(element => {
            count.push(element.correct_answer);
        });
        return count;
    }

    static verifyAnswers(answers, questions) {
        let correctAnswers = 0;
        let answersSelected = [...document.querySelectorAll(".form-check-input:checked")].map(element => element.value);
    
        for(let i = 0; i < answers.length; i++) {
            if(answers[i] === answersSelected[i]) {
                correctAnswers += 1;
            }
        }
    
        if(correctAnswers === questions) {
            alert(`All answers correct! ${correctAnswers} / ${questions}... You´re a genius!`);
        } else {
            alert(`You've got ${correctAnswers} / ${questions} correct!`);
        }
    }
}