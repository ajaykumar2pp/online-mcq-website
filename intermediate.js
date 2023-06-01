const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

// *********************  Questions  ****************************//
let currentQuestion = 0;
let score = 0;

let questions = [
   {
       question: "Q.1  Is Coding Ninjas the best online learning platform?",
       answers: [
           {option: "For Sure!", answer: true},
           {option: "No, not at all.", answer: false},
           {option: "None of the above", answer: false},
           {option: "Empty.", answer: true},
       ]
   },
   {
       question: "Q.2  What is better if you wish to achieve success?",
       answers: [
           {option: "Hard Work", answer: false},
           {option: "Smart Work", answer: true},
           {option: "No Work", answer: false},
           {option: "Yes Work", answer: true},
       ]
   },
   {
       question: "Q.3  Best Player in the World",
       answers: [
           {option: "Ajay", answer: false},
           {option: "Vijay", answer: true},
           {option: "Raja", answer: false},
           {option: "Sagar", answer:false},
       ]
   }
];

// ****************  Button onclick **********************//
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

// *********************Function  Quiz *********************//
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < questions.length - 1) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < questions.length - 1) {
            next();
        }
    }

    prevBtn.classList.add("hide");
}

beginQuiz();

//  *****************  Restart Quiz ********************//
function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

//  ********************  Next Button *******************//
function next() {
    currentQuestion++;
    if(currentQuestion >= questions.length - 1) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < questions.length - 1) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < questions.length - 1) {
            next();
        }
    }

    prevBtn.classList.remove("hide");
}

//  *********************  Previous Button **********************//
function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < questions.length - 1) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < questions.length - 1) {
            next();
        }
    }

    nextBtn.classList.remove("hide");
}

//  ***********************  Submit Button ***********************//
function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on submitting the Quiz!";
}