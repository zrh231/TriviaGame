const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// on submit, show results
submitButton.addEventListener('click', display);

const myQuestions = [
    {
      question: "1. What color is the sky?",
      answers: {
        a: "Purple",
        b: "Blue",
        c: "Orange"
      },
      correctAnswer: "b"
    },
    {
      question: "2. What kind of water do sharks need to live in?",
      answers: {
        a: "Freshwater",
        b: "Saltwater",
        c: "Trick question; they can live in both"
      },
      correctAnswer: "c"
    },
    {
    question: "3. What color is the grass?",
    answers: {
        a: "Green",
        b: "Orange",
        c: "Black"
    },
    correctAnswer: "a"
    },
    {
    question: "4. Which answer is not a State?",
    answers: {
        a: "Ohio",
        b: "Estate",
        c: "California"
    },
    correctAnswer: "b"
    },
    {
    question: "5. What sound does a cat make?",
    answers: {
        a: "Moo",
        b: "Meow",
        c: "Bark"
    },
    correctAnswer: "b"
    },
    {
    question: "6. Which answer is a vegetable?",
    answers: {
        a: "Lettuce",
        b: "Grape",
        c: "Strawberry"
    },
    correctAnswer: "a"
    },
    {
    question: "7. What sound does a dog make?",
    answers: {
        a: "Moo",
        b: "Meow",
        c: "Bark"
    },
    correctAnswer: "c"
    },
    {
    question: "8. What color is the ocean?",
    answers: {
        a: "Blue",
        b: "White",
        c: "Orange"
    },
    correctAnswer: "a"
    },
    {
    question: "9. Which answer is not a fruit?",
    answers: {
        a: "Apple",
        b: "Orange",
        c: "Carrot"
    },
    correctAnswer: "c"
    },
    {
      question: "10. What color is snow",
      answers: {
        a: "Green",
        b: "Red",
        c: "White"
      },
      correctAnswer: "c"
    }
];

function buildQuiz(){
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

            // ...add an HTML radio button
            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

// display quiz right away
buildQuiz()

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer===currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

function display(){
    document.getElementById("quiz").style.display = "block";

    document.getElementById("submit").style.display = "none";
    
    var timeLeft = 30;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {

      if (timeLeft == 0) {
        clearTimeout(timerId);
        showResults();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
}





















