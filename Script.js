

let score = 0;
let timeLeft = 30 ; 
let timerId;

function startGame() {
  score = 0;
  updateScore();
  generateProblem();
  updateTimer();
  document.getElementById('answer').value = '';
  document.getElementById('answer').disabled = false;
  document.getElementById('submit').disabled = false;
  document.getElementById('game').style.display = 'block';
  document.getElementById('start-game').style.display = 'none';
  timerId = setInterval(countDown, 1000);
}

function generateProblem() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let operators = ['+', '-', '*', '/'];
  let operator = operators[Math.floor(Math.random() * operators.length)];
  let problemElement = document.getElementById('problem');
  let problemString = `${num1} ${operator} ${num2}`;
  problemElement.textContent = problemString;
  problemElement.dataset.result = eval(problemString);
}

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answer').value);
  let correctAnswer = parseInt(document.getElementById('problem').dataset.result);

  if (userAnswer === correctAnswer) {
    score++;
    updateScore();
    generateProblem();
    document.getElementById('feedback').textContent = 'Correct!';
  } else {
    document.getElementById('feedback').textContent = 'Incorrect! Try again.';
  }
  document.getElementById('answer').value = '';
}

function updateScore() {
  document.getElementById('score').textContent = `Score: ${score}`;
}

function countDown() {
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerId);
    document.getElementById('answer').disabled = true;
    document.getElementById('submit').disabled = true;
    document.getElementById('game').style.display = 'none';
    document.getElementById('start-game').style.display = 'block';
    alert(`Game over! Your Final Score is ${score}.`);
  }
  updateTimer();
}

function updateTimer() {
  document.getElementById('time-left').textContent = timeLeft;
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('game').style.display = 'none'; 
});
