// Establish Questions/Answers
var questions = [

  //question 1 object (index[0])
  {
    question: "Which of the following is a correct jQuery alternative to .addEventListener?",
    answers: {
      A: ".on('click', function)", 
      B: ".clickon(function)",
      C:".addEvent(click)",
      D: ".click(addEventListener)"
    },
    correctAnswer: "A"
  }, 

  //question 2 object (index[1])
  {
    question: "What is 'var' short for?",
    answers: {
      A: "variety", 
      B: "variation", 
      C: "variability", 
      D: "variable"
    },
    correctAnswer: "D"
  }, 

  //question 3 object (index[2])
  {
    question: "How does a coder check their code without showing it on the page?",
    answers: {
      A: "console.frog",
      B: "console.log", 
      C: "showme.console", 
      D: "log.console"
    },
    correctAnswer: "B"
  }]; 

// create a score variable
var score = 0

// create a time variable
var time = 0

// create a questionIndex variable to know what question we are on 
let questionIndex = 0

// create start button
var startBtn = $("#start");

// listen for click event on start button
$(startBtn).on("click", function() {

  var displayQuestion = function() {
    $(".card-title").append(questions[0].question);
    $(".card-text").append(questions[0].answers)
  }
// load first question/answer options into html
displayQuestion();
console.log(displayQuestion);
});





// create timer functionality
function timer() {
  setInterval(function() {
    
  }, 1000);
}

// each question needs answer buttons with an event listener
// when a user answers a question we need analyze the data associated with clicked button which contains the answer they choose
// if the answer choosen is equal to the correct answer
// increase score
// if the answer choosen is incorrect
// substract time
// regardless of if the answer is right or wrong we need to load the next question
// if time is 0 end game and if questionIndex is longer than the array end game
// otherwise 
// increase the question index and load the next question based on the updated index

// you use a js prompt to ask initials


questionObjectArray = [
  {
    question: "hi",
    answer: "123",

},
]

let data = "question"

questionObjectArray[0][data]



//////////////////////////
// var currentQuestion = 0;
// var correctAnswers = 0;
// var quizComplete = false;

// Quiz functionality
// $(document).ready(function () {

//Display inital question
// displayCurrentQuestion();
//    $(this).find(".#question").hide();

//Display next question
// $("#next").on("click", function() {
    // quiz.fadeOut(function() {
    //   $('#question').remove();
    // });