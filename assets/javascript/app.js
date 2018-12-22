
var triviaArray = [
    {
        question: "Which type of animal is Rocko from Rockos Modern Life?",
        options: ["Dog", "Mouse", "Wallaby", "Beaver"],
        answer: "Wallaby",
        image: "assets/images/rockos-modern-life.jpg"
    },
    {
        question: "What is the name of Rugrat Angelica's doll?",
        options: ["Betty", "Lisa", "Sandy", "Cynthia"],
        answer: "Cynthia",
        image: "assets/images/rugrats.jpg"

    },
    {
        question: "Which school did the kids in Hey Arnold attend?",
        options: ["PS 118", "PS 120", "PS 108", "PS 111"],
        answer: "PS 118",
        image: "assets/images/hey-arnold.png"
    }
];

var isTimerRunning = false; 

var intervalID;

var time;

var questionCounter = 0; 
var correctCounter = 0;
var incorrectCounter = 0;

var correctAnswer; 

var gameImage; 

function nextQuestion(questionCounter) {

    for (var i = 0; i < triviaArray.length; i++) {

    $("#question-display").html(triviaArray[questionCounter].question); 
    
    }

    gameImage = $("<img>", triviaArray[questionCounter].image)
    gameImage.attr("src", triviaArray[questionCounter].image);
    gameImage.addClass("img-fluid show-images")
    $("#game-image").append(gameImage); 


    checkQuestion(questionCounter); 

}

function checkQuestion(questionCounter) {
    

    
    for (var i = 0; i < triviaArray[questionCounter].options.length; i++) {
        var answerBtn = $('<button></button>');
        answerBtn.addClass("btn btn-primary text-align-center answer-button");
        answerBtn.attr("type", "button"); 
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

            correctCounter++;
            rightAnswer();
            stopTimer(); 
    
        }

        if (userGuess !== correctAnswer) {
            
            incorrectCounter++;
            wrongAnswer(); 
            stopTimer(); 

        }

    }); 

}

function rightAnswer() {

    $("#options-display").empty();
    $("#timer").empty();
    $("#game-image").empty();
    $("#question-display").empty();
    $("#question-display").text("Correct!");
    $("#options-display").html('<div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe src="https://giphy.com/embed/33UbGsRWIZhkc" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed giph" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/dance-happy-ren-and-stimpy-33UbGsRWIZhkc"></a></p>'); 
    
    setTimeout(questionReset, 2 * 1000); 
    
}


function wrongAnswer() {

    $("#options-display").empty();
    $("#timer").empty(); 
    $("#game-image").empty();
    $("#question-display").empty();
    $("#question-display").text("Nope!");
    $("#options-display").html('<div style="width:100%;height:0;padding-bottom:55%;position:relative;"><iframe src="https://giphy.com/embed/l1BgS5jxbFoJwgr0Q" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed giph" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/kidschoice-kids-choice-awards-kca2017-l1BgS5jxbFoJwgr0Q"></a></p>');
    
    setTimeout(questionReset, 2 * 1000); 

}

function timedOut() {

    $("#options-display").empty();
    $("#timer").empty(); 
    $("#game-image").empty()
    $("#question-display").empty();
    $("#question-display").text("You timed out!")
    $("#options-display").html('<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/BRFBzsQqiIUrm" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed giph" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/90s-nickelodeon-morning-BRFBzsQqiIUrm"></a></p>')
    
    setTimeout(questionReset, 2 * 1000); 
    
}

function questionReset() {   

    questionCounter++;

    if (questionCounter < triviaArray.length) {

        $("#options-display").empty(); 
        nextQuestion(questionCounter);
        startTimer();
    }

    else {

       gameOver();

    }

}


function gameOver() {
    
    $("#question-display").empty();
    $("#options-display").empty()
    $("#question-display").text("Game over. Click the button to play again");
    $("#correct").append("Correct: ", correctCounter); 
    $("#wrong").append("Incorrect: ", incorrectCounter);
    $("#title-image").html('<img src="assets/images/game-over-image.jpg" class="img-fluid show-images" alt="game-over">')

    createRefreshButton();

}

function createRefreshButton(){
    
    var resetButton = $('<button>Start</button>');
    resetButton.addClass("btn btn-primary");
    resetButton.addClass("start-button"); 
    resetButton.attr("type", "button"); 
    $('.start-restart-button').append(resetButton);
    resetButton.on('click', function(){

        console.log("clicked"); 
        gameReset(); 
        $(this).hide(); 
    });

}


function gameReset() {

    $("#title-image").empty(); 
    $("#questions-display").empty(); 
    $("#correct").empty();
    $("#wrong").empty(); 
    $("#timer").empty(); 
    questionCounter = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    timedOutCounter = 0;
    nextQuestion(questionCounter); 
    startTimer();

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
            timedOut(); 

        }

}

$("#first-start-button").on('click', function() {

    $(this).hide();
    $("#title-image").empty();  

    nextQuestion(questionCounter); 
    startTimer();
    
}); 

