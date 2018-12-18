//Display start page with start button when page loads or game resets 
//When button is pressed, display 10 sec timer along with muliple choice question 
//If the user presses the correct answer the timer stops and the "correct answer" image is displayed
//If the user presses the incorrect answer or time runs out, the "nope" image is display 
//Game moves onto the next question a few seconds afterward with no prompting 
//After all questions are done, display correct answers, incorrect answers, and unanswered questions
//Display "Start over?"
//Reset game (with no page reload)

var triviaArray = [
    {
        question: "Which type of animal is Rocko from Rockos Modern Life",
        options: ["Dog", "Mouse", "Wallaby", "Beaver"],
        answer: "Wallaby"

    },
    {
        question: "What is the name of Rugrat Angelica's doll?",
        options: ["Betty", "Lisa", "Sandy", "Cynthia"],
        answer: "Cynthia"
    },
    {
        question: "Which school did the kids in Hey Arnold attend?",
        options: ["PS 118", "PS 120", "PS 108", "PS 111"],
        answer: "PS 118"
    }
];

var isTimerRunning = false; 

var intervalID;

var time;

var questionCounter = 0; 

var correctAnswer; 

function nextQuestion(questionCounter) {

for(var i = 0; i < triviaArray.length; i++) {

   $("#question-display").html(triviaArray[questionCounter].question); 

}

checkQuestion(questionCounter); 

}

function checkQuestion(questionCounter) {

    for (var i = 0; i < triviaArray[questionCounter].options.length; i++) {
        var answerBtn = $("<button>");
        answerBtn.addClass("answer-button");
        answerBtn.attr("value", triviaArray[questionCounter].options[i]); 
        answerBtn.text(triviaArray[questionCounter].options[i]);
        $("#options-display").append(answerBtn); 
    }

    correctAnswer = triviaArray[questionCounter].answer;

    console.log(correctAnswer);

    $(".answer-button").on('click', function() {

        var userGuess = $(this).attr("value"); 
        console.log(userGuess); 

        if (userGuess === correctAnswer){

            correctAnswer(); 
    
        }
    
        if (userGuess !== correctAnswer) {
            
            wrongAnswer(); 
        }

    }); 

}

function correctAnswer() {

    console.log("correct!")
}


function wrongAnswer() {

    console.log("nope!")

}


function startTimer() {

    if (!isTimerRunning) {
        time = 10; 
        $("#timer").text(time); 
        intervalID = setInterval(count, 1000);
        isTimerRunning = true; 
    }

}


function stopTimer() {

    clearInterval(intervalID);
    isTimerRunning = false; 

}

function count() {
        time --;
        $("#timer").text(time); 
        if (time === 0) {
        
            stopTimer();
            wrongAnswer(); 

        }

}

$("#start-button").on('click', function() {

    $(this).hide(); 
    nextQuestion(questionCounter); 
    startTimer();

}); 

