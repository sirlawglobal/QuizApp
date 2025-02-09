const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
  },
  {
      question: "Which language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript"
  },
  {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const welcomeScreen = document.getElementById("welcome-screen");
const startQuizButton = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const resultElement = document.getElementById("result");

startQuizButton.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  
  currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
  });
  
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
      score++;
  }
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
  } else {
      showResults();
  }
}

function showResults() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  progressElement.style.display = "none";
  
  resultElement.textContent = `Your Score: ${score} / ${quizData.length}`;
}
