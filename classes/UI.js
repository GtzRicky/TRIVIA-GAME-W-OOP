import Answers from './Answers.js'

export default class UI {
    static printCategories(element) {
        const categories = document.querySelector('#select-category');
        element.forEach((category) => {
        categories.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        })
    }

    static printData(data) {
        const container = document.getElementById('questions-container');
    
        let html = '';
    
        data.forEach(element => {
            html += `<div class="col-md-4 mt-3" >
                        <div class="card h-100">
                            <div class="card-body">
                                ${element.question}
                                ${this.printAnwers(element)}
                            </div>
                        </div>
                    </div>`;
        });

        html += `<button type="submit" class="btn btn-success btn-lg btn-block mt-5 mb-5">Verify Results!</button>`
        
        container.innerHTML = html;
    }

    static printAnwers(element) {
        let corrAnswer = element.correct_answer;
        let incorrAnswers = element.incorrect_answers;
        let totalAnswers = [...incorrAnswers];
        totalAnswers.splice(Math.floor(Math.random() * 4), 0, corrAnswer);
    
        let showAnswers = ``;
    
        totalAnswers.forEach(answer => {
            showAnswers += `<div class="form-check">
            <label><input class="form-check-input" type="radio" name="${element.question}" value="${answer}" required>${answer}</label>
          </div>`
        });
    
        return showAnswers;
    }

}