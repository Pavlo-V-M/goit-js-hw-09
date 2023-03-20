
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

// origin code:
// startButton.addEventListener('click', () => {
//   intervalId = setInterval(changeBackgroundColor, 1000);
// });

// test - 1
// startButton.addEventListener('click', () => {
//   if (!intervalId) {
//     intervalId = setInterval(changeBackgroundColor, 1000);
//   }
// });

// test - 2
startButton.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
});

// origin code:
// stopButton.addEventListener('click', () => {
//   clearInterval(intervalId);
// });

// test - 1
// stopButton.addEventListener('click', () => {
//   if (intervalId) {
//     clearInterval(intervalId);
//   }
// });

// test - 2
stopButton.addEventListener('click', () => {
  intervalId = clearInterval(intervalId);
});
