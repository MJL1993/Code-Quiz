// Establish Questions/Answers
var questions = [

  //question 1 object (index[0])
  {
    question: "Which of the following is a correct jQuery alternative to .addEventListener?",
    answers: [
      ".on('click', function)", 
      ".clickon(function)",
      ".addEvent(click)",
      ".click(addEventListener)"
    ],
    correctAnswer: "A"
  }, 

  //question 2 object (index[1])
  {
    question: "What is 'var' short for?",
    answers: [
      "variety", 
      "variation", 
      "variability", 
      "variable"
    ],
    correctAnswer: "D"
  }, 

  //question 3 object (index[2])
  {
    question: "How does a coder check their code without showing it on the page?",
    answers: [
      "console.frog",
      "console.log", 
      "showme.console", 
      "log.console"
    ],
    correctAnswer: "B"
  }]; 

// start game with score of 0
var score = 0

// create a time variable
var time = 0

// create a questionIndex variable to know what question we are on 
var questionsIndex = 0

// create start button
var startBtn = $("#start");

// listen for click event on start button
$(startBtn).on("click", function() {
  displayQuestion(0);
  $(startBtn).remove();
});

// display question
var displayQuestion = function(index) {

  var q = questions[index]

    $(".card-title").append(q.question);
    for (var i = 0; i < q.answers.length; i++) {
      $(".options").append(`<li><button class="answer-button" id="#answer-${i}"
      onclick="window.chooseAnswer(${i})">${q.answers[i]}</button></li>`);
    }
}

// when a user answers a question we need to analyze the data associated with clicked button which contains the answer they choose
// if the answer chosen is equal to the correct answer
// increase score
// if the answer chosen is incorrect
// substract time
// regardless of if the answer is right or wrong we need to load the next question

function chooseAnswer (index) {
  if (index === questionsIndex.correctAnswer) {
    //correct answer
    alert("correct");
    $(".card-title").empty();
    $(".options").empty();
    // increase the question index and load the next question based on the updated index
    questionsIndex++;
    displayQuestion(questionsIndex);
    //increment score counter
    score ++;
    $(".score").html(score);
  } else {
    alert("wrong");
  }
}

$(".score").html(score);
$(".timer").html(time);
displayQuestion(0);

// Timer functionality
setInterval(function() {
  time -= 1;
  $(".timer").html(time);
}, 1000);


// if time is 0 end game and if questionIndex is longer than the array end game


// you use a js prompt to ask initials
