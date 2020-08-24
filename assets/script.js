// global variables here
var startBtn = document.getElementById('start');
var quizElement = document.getElementById('quiz');
var questionElement = document.getElementById('question');
var answerA = document.getElementById('btnA');
var answerB = document.getElementById('btnB');
var answerC = document.getElementById('btnC');
var answerD = document.getElementById('btnD');
var optionA = document.getElementById('optionA');
var optionB = document.getElementById('optionB');
var optionC = document.getElementById('optionC');
var optionD = document.getElementById('optionD');
var timer = document.getElementById('timer');



   
// array for quiz questions
var quizQuestions = [
    {    
        question: "Commonly used data types DO Not include:",
        answerA: 'Strings',
        answerB: 'Booleans',
        answerC: 'Alerts',
        answerD: 'Numbers',
        correct: 'answerB'   
    },
    {
        question: "The condition in an if/else statement is enclosed with ____?",
        answerA: 'Quotes',
        answerB: 'Curly Brackets',
        answerC: 'Parentheses',
        answerD: 'Square Brackets',
        correct: 'answerC'
    },
    {
        question: "Arrays in JavaScript can be used to ____?",
        answerA: 'Numbers and Strings',
        answerB: 'Other arrays',
        answerC: 'Booleans',
        answerD: 'All of the above',
        correct: 'answerD'
    },
    {
        question: "String values must be enclosed with ____ when being assigned to variables?",
        answerA: "Commas",
        answerB: "Curly Brackets",
        answerC: "Quotes",
        answerD: "Parenthesis",
        correct: "B"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answerA: "JavaScript",
        answerB: "Terminal/Bash",
        answerC: "for loops",
        answerD: "Console.log",
        correct: "c"
    },
];

var score = 0;
var questionNumber = 0;

var startQuiz = function() {

    var question = document.createElement('div');

    question.innerHTML = "<h2>" + quizQuestions[0].question + "</h2>";
    questionElement.appendChild(question);

    optionA.innerHTML = quizQuestions[0].answerA;
    optionB.innerHTML = quizQuestions[0].answerB;
    optionC.innerHTML = quizQuestions[0].answerC;
    optionD.innerHTML = quizQuestions[0].answerD; 

    answerB.className = 'correct-answer';

}

var secondQuestion = function() {

    var question = document.createElement('div');

    question.innerHTML = "<h2>" + quizQuestions[1].question + "</h2>";
    questionElement.appendChild(question);

    optionA.innerHTML = quizQuestions[1].answerA;
    optionB.innerHTML = quizQuestions[1].answerB;
    optionC.innerHTML = quizQuestions[1].answerC;
    optionD.innerHTML = quizQuestions[1].answerD;
}

var thirdQuestion = function() {

    var question = document.createElement('div');

    question.innerHTML = "<h2>" + quizQuestions[2].question + "</h2>";
    questionElement.appendChild(question);

    optionA.innerHTML = quizQuestions[2].answerA;
    optionB.innerHTML = quizQuestions[2].answerB;
    optionC.innerHTML = quizQuestions[2].answerC;
    optionD.innerHTML = quizQuestions[2].answerD;
}

var fourthQuestion = function() {

    var question = document.createElement('div');

    question.innerHTML = "<h2>" + quizQuestions[3].question + "</h2>";
    questionElement.appendChild(question);

    optionA.innerHTML = quizQuestions[3].answerA;
    optionB.innerHTML = quizQuestions[3].answerB;
    optionC.innerHTML = quizQuestions[3].answerC;
    optionD.innerHTML = quizQuestions[3].answerD;
}

var fifthQuestion = function() {

    var question = document.createElement('div');

    question.innerHTML = "<h2>" + quizQuestions[4].question + "</h2>";
    questionElement.appendChild(question);

    optionA.innerHTML = quizQuestions[4].answerA;
    optionB.innerHTML = quizQuestions[4].answerB;
    optionC.innerHTML = quizQuestions[4].answerC;
    optionD.innerHTML = quizQuestions[4].answerD;
}


var countdown = document.getElementById("timer").textContent;
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
     
      if (timeLeft > 1) {
        timer.textContent = timeLeft + "seconds remaining";
        timeleft--;
    
      } else {
        timer.textContent = "";
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
}





//Display questions and corresponding answers
//Loop through questions
//Track scores
//Show results


//function askQuestion() {
  //  question.getElementById("#question").textcontent = quizQuestions[questionIndex].question;

//    for (var i = i < quizQuestions[questionIndex].answers.length; i++;

 //var submitBtn = document.getElementById('#submit');
//var resultsElement = document.getElementById('#results');

//var questionIndex = 0   
    
    



    // loop through quizQuestion objects
  //  for (var i = 1; i <=4; i++) {
   //     var answers = (quizQuestions[i].question);
   // }


//var showResults = function() {



//showQuiz();
startBtn.addEventListener('click', startQuiz);
//submitBtn.addEventListener('click', showResults);
//}