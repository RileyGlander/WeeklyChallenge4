    var timerEl = document.querySelector("#timer");
    var highScoreEl = document.querySelector(".highscore");
    var answer1El = document.querySelector(".answer1");
    var startBtn = document.querySelector("#startBtn");
    var startContainer = document.querySelector("#startContainer");
    var questionContainer = document.querySelector(".questionContainer");
 var qIndex = 0;
    var questionArr = [
      {
        question: 'Which one says yes?',
        choices:['No', 'Maybe', 'Perhaps', 'Yes'], 
        correctAnswer: 'Yes'
      },
      {
        question: 'What is the correct answer?',
        choices:['Incorrect','Incorrect','Correct', 'Incorrect'],
        correctAnswer: 3
      },
      {
        question: 'What is 1 + 3?',
        choices:[1,2,3,4],
        correctAnswer: 4
      }
    ]

    var message = "Time is up";

    function displayMessage(){

    }
    
//make a timer that counts down 

    function countdown() {
    var timeLeft = 5;
    

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
          // if (timeLeft > 1) {
          timerEl.textContent = timeLeft + " seconds remaining!";
          timeLeft--;
        }
        //  else if (timeLeft === 1) {
        //   timerEl.textContent = timeLeft + " second remaining!";
        //   timeLeft--;
        // } 
        else {
          timerEl.textContent = "";
          clearTimeout(timeInterval);
          displayMessage();
        }
      }, 1000);
    }
    
//make questions and answers that show when correct or incorrect when clicked on//

    function displayQuestions(){
//select the html item that's displaying the question
var questionEl = document.querySelector('.questionEl')
//select the html item that's displaying the asnwer1
var answer1 = document.querySelector('.answer1')

//select the html item that's displaying the answer2
var answer2 = document.querySelector('.answer2')

//select the html item that's displaying the answer3
var answer3 = document.querySelector('.answer3')

//select the htmlitem that's displaying the answer4
var answer4 = document.querySelector('.answer4')


//display the question on the html element
questionEl.textContent = questionArr[qIndex].question
//console.log(questionArr[0].question)
//display the choices on each ansnwer html element
answer1.textContent = questionArr[qIndex].choices[0]
answer2.textContent = questionArr[qIndex].choices[1]
answer3.textContent = questionArr[qIndex].choices[2]
answer4.textContent = questionArr[qIndex].choices[3]


//figure out how to do the click event
//when click on one of the choices
//increase qIndex by 1
//Call displayQuestion()
    }

    startBtn.addEventListener('click', function(){
      startContainer.classList.add('hide')
questionContainer.classList.remove('hide')
      countdown()
      displayQuestions()
    })
    
    
    //make functional high score button//
//have the high score show everyones score//


    



//make incorrect answers affect timer 

//show the user their score at the end//

//logs the user score with everyone elses//