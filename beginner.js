const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("option1");
const falseBtn = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
let score = 0;

let questions = [
  {
    question: "Q.1 Is Coding Ninjas the best online learning platform?",
    answers: [
      { option: "For Sure!", answer: true },
      { option: "No, not at all.", answer: false },
      { option: "No.", answer: false },
      { option: "all.", answer: false },
    ],
  },
  {
    question: "Q.2 What is better if you wish to achieve success?",
    answers: [
      { option: "Hard Work", answer: false },
      { option: "Smart Work", answer: true },
      { option: "No Work", answer: false },
      { option: "Simple Work", answer: false },
    ],
  },
  {
    question: "Q.3 Complete the phrase: Time and ___ wait for none.",
    answers: [
      { option: "Batman", answer: false },
      { option: "Tide", answer: true },
      { option: "man", answer: false },
      { option: "Bat", answer: false },
    ],
  },
];

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

function beginQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  questionText.innerHTML = questions[currentQuestion].question;
  displayOptions(currentQuestion);
  prevBtn.classList.add("hide");


   // Add event listeners to answer option buttons
   trueBtn.addEventListener("click", () => {
    checkAnswer(0);
    next();
});

falseBtn.addEventListener("click", () => {
    checkAnswer(1);
    next();
});

option3.addEventListener("click", () => {
    checkAnswer(2);
    next();
});

option4.addEventListener("click", () => {
    checkAnswer(3);
    next();
});
}

function displayOptions(questionIndex) {
  const currentQuestionObj = questions[questionIndex];
  trueBtn.innerHTML = currentQuestionObj.answers[0].option;
  falseBtn.innerHTML = currentQuestionObj.answers[1].option;
  option3.innerHTML = currentQuestionObj.answers[2].option;
  option4.innerHTML = currentQuestionObj.answers[3].option;
}

function checkAnswer(answerIndex) {
  const currentQuestionObj = questions[currentQuestion];
  const selectedAnswer = currentQuestionObj.answers[answerIndex];
  if (selectedAnswer.answer) {
    if (score <= questions.length-1) {
      score++;
    }
  }
  userScore.innerHTML = score;
}

function next() {
  currentQuestion++;
  if (currentQuestion >= questions.length - 1) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  displayOptions(currentQuestion);
  prevBtn.classList.remove("hide");
}

function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextBtn.classList.remove("hide");
    prevBtn.classList.add("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  displayOptions(currentQuestion);
  nextBtn.classList.remove("hide");
}
// ****************  restart  **********************//
function restart() {
  currentQuestion = 0;
  score = 0;
  userScore.innerHTML = score;
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  submitBtn.classList.remove("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  option3.classList.remove("hide");
  option4.classList.remove("hide");
  beginQuiz();
}


function submit() {
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  trueBtn.classList.add("hide");
  falseBtn.classList.add("hide");
  option3.classList.add("hide");
  option4.classList.add("hide");

  const percentageScore = (score / questions.length) * 100;
  questionText.innerHTML = `Congratulations on submitting the Quiz! Your score is ${percentageScore.toFixed(2)}%`;
 
}

window.addEventListener("load", beginQuiz);
// beginQuiz();
