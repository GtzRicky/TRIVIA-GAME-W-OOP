export default class Request {
    static accessCategories() {
        return fetch ('https://opentdb.com/api_category.php');
    }
    
    static getQuestions() {
        const [totalQuestions, selectCategories, selectDifficulty, selectType] = this.filterQuestions();

            // Caso 1: Dificultad y tipo seleccionados.

        let url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${selectCategories}&difficulty=${selectDifficulty}&type=${selectType}`;

            // Caso 2: La dificultad y el tipo están en random
            // Caso 3: Dificultad seleccionada y el tipo en random
            // Caso 4: Dificultad en random y el tipo seleccionado


        if(selectDifficulty === "any" && selectType === "any") {
            url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${selectCategories}`;
        } if(selectDifficulty != "any" && selectType === "any") {
            url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${selectCategories}&difficulty=${selectDifficulty}`;
        } if(selectDifficulty === "any" && selectType != "any") {
            url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${selectCategories}&type=${selectType}`;
        }
    
        return fetch(url)
    }

    static filterQuestions() {
        const totalQuestions = document.querySelector('#total-questions').value;
        const selectCategories = document.querySelector('#select-category').value;
        const selectDifficulty = document.querySelector('#select-difficulty').value;
        const selectType = document.querySelector('#select-type').value;
        return [totalQuestions, selectCategories, selectDifficulty, selectType];
    }

}