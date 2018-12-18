//Display start page with start button when page loads or game resets 
//When button is pressed, display 10 sec timer along with muliple choice question 
//If the user presses the correct answer the timer stops and the "correct answer" image is displayed
//If the user presses the incorrect answer or time runs out, the "nope" image is display 
//Game moves onto the next question a few seconds afterward with no prompting 
//After all questions are done, display correct answers, incorrect answers, and unanswered questions
//Display "Start over?"
//Reset game (with no page reload)

var trivia = [
    questionsObject = {
        qOne: 'Which type of animal is Rocko from Rockos Modern Life?',
        qTwo: 'What is the name of Rugrat Angelicas doll?',
        qThree: 'Which school do the kids in Hey Arnold attend?',
    },
    
    optionsObject = {
        optionsOne : ['Dog', 'Wallaby', 'Mouse', 'Beaver'],
        optionsTwo: ['Sue', 'Cynthia', 'Betty', 'Candy'],
        optionThree: ['PS 118', 'PS 108', 'PS 110', 'PS 128'],
    },

    answersObject = {
        ansOne: ['Wallaby'],
        ansTwo: ['Cynthia'],
        ansThree: ['PS 118'], 
        
    },
];

var isTimerRunning = false; 

var intervalID;

var time = 10

console.log(time); 

function startTimer() {

    if (!isTimerRunning) {
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
    console.log(time);
    if (time === 0) {
        stopTimer();
    }

}

$("#start-button").on('click', startTimer); 

