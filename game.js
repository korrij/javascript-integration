"use strict";

// Questions: [Question text, Correct answer index, Answer 1, Answer 2, Answer 3]
const questions = [
  ["What is the capital of France?", 0, "Paris", "London", "Berlin"],
  ["What is 2 + 2?", 1, "3", "4", "5"],
  ["Which planet is known as the Red Planet?", 2, "Earth", "Venus", "Mars"]
];

let count = 0;

window.onload = function () {
  loadStartButton();
};

function loadStartButton() {
  const promptDiv = document.getElementById("prompt");
  promptDiv.innerHTML = '<button onclick="playGame()">Play Game</button>';
}

function playGame() {
  document.getElementById("feedback").innerHTML = ""; // clear feedback

  if (count >= questions.length) {
    document.getElementById("prompt").innerHTML = '<button onclick="location.reload()">Restart Game</button>';
    return;
  }

  const currentQuestion = questions[count];
  const questionText = currentQuestion[0];
  const correctIndex = currentQuestion[1];
  const answers = currentQuestion.slice(2);

  document.getElementById("question").textContent = questionText;

  const answersList = document.getElementById("answers");
  answersList.innerHTML = "";

  answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" onclick="checkAnswer(${index}, ${correctIndex})">${answer}</a>`;
    answersList.appendChild(li);
  });

  const prompt = document.getElementById("prompt");
  prompt.innerHTML = "<p>Click the best answer below:</p>";
}

function checkAnswer(selectedIndex, correctIndex) {
  const feedback = document.getElementById("feedback");

  if (selectedIndex === correctIndex) {
    feedback.textContent = "Correct!";
    feedback.className = "success";
  } else {
    feedback.textContent = "Sorry, that's incorrect.";
    feedback.className = "error";
  }

  count++;

  setTimeout(() => {
    playGame();
  }, 1000);
}