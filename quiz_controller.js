function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};

// constructor fxn to get index of current ques
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
};


// constructor fxn to check if quiz has ended
Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
};


// constructor fxn to check if current answer is equal to correct answer 
Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}
    this.questionIndex++;

};