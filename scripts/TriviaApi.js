class TriviaApi {
    constructor(questionCount) {
        this.BASE_URL = `https://opentdb.com/api.php?amount=${questionCount}&token=`;
        this.token = null;
        this.questions = [];
    }
    getToken() {
        if (this.token) {
            return Promise.resolve(this.token);
        }
        else {
            return fetch("https://opentdb.com/api_token.php?command=request")
            .then(res => res.json())
            .then(data => data.token);
        }
    }
    getQuestions() {
        return this.getToken()
        .then(token => fetch(this.BASE_URL + token))
        .then(res => res.json())
        .then(data => this.questions = data.results.map(q => new Question(q.question, [...q["incorrect_answers"], q["correct_answer"]], q["correct_answer"])));
        // .then(data => this.questions = [...data.results]);
    }
}
