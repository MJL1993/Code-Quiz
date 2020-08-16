// Establish Questions/Answers
var questions = [

  //question 1 object
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

  //question 2 object
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

  //question 3 object
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


var currentQuestion = 0;
var correctAnswers = 0;
var quizComplete = false;

//Quiz functionality
$(document).ready(function () {

//Display inital question
displayCurrentQuestion();
$(this).find(".#question").hide();

//Display next question
$("#next").on("click", function() {
    quiz.fadeOut(function() {
      $('#question').remove();
    });


//Display current question and options
function createQuestionElement(index) {
  var questionEl = $('<div>', {
    id: 'question'
  });
  var header = $('<h2>Question ' + (index + 1) + ':</h2>');
  questionEl.append(header);

  var question = $('<p>').append(questions[index].question);
  questionEl.append(question);

  var radioButtons = createRadios(index);
  questionEl.append(radioButtons);

  return questionEl;
}

for (var i = 0; i < questions.length)
  h5El.textContent = questions[i];
  answerA.innerHTML = questions[i].answers[0];
  answerB.innerHTML = questions[i].answers[1];
  answerC.innerHTML = questions[i].answers[2];
  answerD.innerHTML = questions[i].answers[3];

  quiz.appendChild(h5El);
  quiz.appendChild(answerA);
  quiz.appendChild(answerB);
  quiz.appendChild(answerC);
  quiz.appendChild(answerD);
};