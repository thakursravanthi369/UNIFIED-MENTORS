const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const questionContainer = document.getElementById('questionContainer');
const submitTestBtn = document.getElementById('submitTest');
const scoreDisplay = document.getElementById('score');

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Capital of India?", answer: "Delhi" },
  { question: "Synonym of fast?", answer: "Quick" }
];

let userAnswers = [];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Logged in successfully');
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signed up successfully');
});

function selectLocation(loc) {
  alert('Selected location: ' + loc);
}

function startTest() {
  questionContainer.innerHTML = '';
  userAnswers = [];
  questions.forEach((q, i) => {
    const input = document.createElement('input');
    input.placeholder = q.question;
    input.dataset.index = i;
    questionContainer.appendChild(input);
  });
  submitTestBtn.style.display = 'block';
}

function submitTest() {
  const inputs = questionContainer.querySelectorAll('input');
  let score = 0;
  inputs.forEach((input, index) => {
    if (input.value.trim().toLowerCase() === questions[index].answer.toLowerCase()) {
      score++;
    }
  });
  scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}`;
  submitTestBtn.style.display = 'none';
}
