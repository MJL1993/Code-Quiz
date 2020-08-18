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

// start game with score of 0
var score = 0

// create a time variable
var time = 0

// create a questionIndex variable to know what question we are on 
let questionIndex = 0

// create start button
var startBtn = $("#start");

// display inital question
var displayQuestion = function() {
    $(".card-title").append(questions[0].question);
  }  

// listen for click event on start button
$(startBtn).on("click", function() {
  displayQuestion();
  $(startBtn).remove();
});

// create timer functionality
var timeEl = $(".time");
var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
function sendMessage() {
  timeEl.textContent = "Time's up!";
}
setTime();

// each question needs answer buttons with an event listener
var answersList = [];
//answersList = document.getElementsByTagName("li");

var answersContainer = $(".card-text");

var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");

answer1.textContent = "";
answer2.textContent = "";
answer3.textContent = "";
answer4.textContent = "";

answersList.appendChild(answer1);
answersList.appendChild(answer2);
answersList.appendChild(answer3);
answersList.appendChild(answer4);

$(answerABtn).on("click", function(){});
$(answerBBtn).on("click", function(){});
$(answerCBtn).on("click", function(){});
$(answerDBtn).on("click", function(){});

// when a user answers a question we need to analyze the data associated with clicked button which contains the answer they choose
// if the answer chosen is equal to the correct answer
// increase score
// if the answer chosen is incorrect
// substract time
// regardless of if the answer is right or wrong we need to load the next question
// if time is 0 end game and if questionIndex is longer than the array end game
// otherwise 
// increase the question index and load the next question based on the updated index

// you use a js prompt to ask initials



// example code
//questionObjectArray = [
  //{
   // question: "hi",
   // answer: "123",

//},
//]

//let data = "question"

//questionObjectArray[0][data]
