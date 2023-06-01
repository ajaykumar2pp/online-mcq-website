const questionText = document.getElementById('question-text');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const scoreElement = document.getElementById('score');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 0
  },
  {
    question: 'Which is the largest planet in our solar system?',
    options: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
    answer: 0
  },
  {
    question: 'Which country is famous for its tulips?',
    options: ['Netherlands', 'Italy', 'Japan', 'Australia'],
    answer: 0
  },
  // Add more questions here
];

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  option1.textContent = currentQuestion.options[0];
  option2.textContent = currentQuestion.options[1];
  option3.textContent = currentQuestion.options[2];
  option4.textContent = currentQuestion.options[3];
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function showPreviousQuestion() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

function endQuiz() {
  questionText.textContent = 'Quiz completed!';
  option1.style.display = 'none';
  option2.style.display = 'none';
  option3.style.display = 'none';
  option4.style.display = 'none';
  submitButton.style.display = 'none';
  restartButton.classList.remove('hide');
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  option1.style.display = 'block';
  option2.style.display = 'block';
  option3.style.display = 'block';
  option4.style.display = 'block';
  submitButton.style.display = 'block';
  restartButton.classList.add('hide');
}

option1.addEventListener('click', function() {
  checkAnswer(0);
});

option2.addEventListener('click', function() {
  checkAnswer(1);
});

option3.addEventListener('click', function() {
  checkAnswer(2);
});

option4.addEventListener('click', function() {
  checkAnswer(3);
});

submitButton.addEventListener('click', function() {
  showNextQuestion();
  scoreElement.textContent = score;
});

prevButton.addEventListener('click', function() {
  showPreviousQuestion();
});

nextButton.addEventListener('click', function() {
  showNextQuestion();
});

restartButton.addEventListener('click', function() {
  restartQuiz();
});

showQuestion();
