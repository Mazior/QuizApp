//fxn to populate a question
function populate() {
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        //show choices
        var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);

        }			
	showProgress();

    }

};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
	
};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
};


function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id = 'score' > Your scores : " + quiz.score + " </h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
	
};


//add questions using array
var questions  =[
    new Question("How many regions do we have in Ghana?",["10", "12","11","1"], "10"),
    new Question("What is the current currency in Ghana called?",["Yen", "Cedi","kudi","sikaPa"],"Cedi"),
    new Question("What is the largest tribe in Ghana",["Ewe", "Akan","Guan","Ga"], "Akan"),
    new Question("Before colonization, Ghanaian's traded using",["Barter System", "Pound Sterling","Cedi","Kakai"], "Barter System","Barter System"),
    new Question("Which lake in Ghana is the one of the largest man-made lakes in the world?",[" Lake Bosumtwi", "Lake Chad","Lake Volta","Lake Kainji"], "Lake Volta"),
    new Question("This Ghanaian leader was considered to be the first-ever president of the Republic of Ghana, and an extremely significant figure in its fight for independence from the British. Who was he?",[" Joseph Arthur Ankrah", "Kwame Nkrumah"," John Kufour"," Fred Akuffo"],
	"Kwame Nkrumah"),
	new Question( "which year did Ghana gain her independence?", ["6th March 1956", "6th March 1950","6th March 1957","6th March 1954"],"6th March 1957")

];

var quiz = new Quiz(questions);

populate();
