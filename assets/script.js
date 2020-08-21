// global variables here
var startBtn = document.getElementById('start');
var quizElement = document.getElementById('quiz');
var submitBtn = document.getElementById('submit');
var resultsElement = document.getElementById('results');


// build quiz
var showQuiz = function() {
    //store html output
    var output = [];
    
    // array for quiz questions
    var quizQuestions = [
    { 
        question: "Commonly used data types DO Not include:", 
        answers: {
            a: "Strings",
            b: "Booleans",
            c: "Alerts",
            d: "Numbers"
        },
        correctAnswer: "b"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____?",
        answers: {
            a: "Quotes",
            b: "Curly Brackets",
            c: "Parentheses",
            d: "Square Brackets"
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to ____?",
        answers: {
            a: "Numbers and Strings",
            b: "Other arrays",
            c: "Booleans",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed with ____ when being assigned to variables?",
        answers: {
            a: "Commas",
            b: "Curly Brackets",
            c: "Quotes",
            d: "Parenthesis"
        },
        correctAnswer: "b"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: {
            a: "JavaScript",
            b: "Terminal/Bash",
            c: "for loops",
            d: "Console.log"
        },
        correctAnswer: "c"
    },
    ]

    // loop through quizQuestion objects
    for (var i = 0; i < quizQuestions.length; i++) {
        var answers = confirm(quizQuestions[i].question);
    }
}

var showResults = function() {


}
showQuiz();
startBtn.addEventListener('click', showQuiz);
submitBtn.addEventListener('click', showResults);
