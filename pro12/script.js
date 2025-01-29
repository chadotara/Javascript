let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  if (result.value !== '' && !isNaN(result.value[result.value.length - 1])) {
    result.value += operator;
  }
}

function clearDisplay() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function toggleSign() {
  if (result.value !== '' && !isNaN(result.value)) {
    result.value = result.value.startsWith('-') ? result.value.slice(1) : `-${result.value}`;
  }
}

// Light/Dark Mode Toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.textContent = body.classList.contains('light-mode') ? '🌞' : '🌙';
}