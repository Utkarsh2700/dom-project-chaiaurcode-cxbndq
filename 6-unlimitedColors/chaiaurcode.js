// Generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// let randCol =
console.log(randomColor());

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

const stratBtn = document
  .getElementById('start')
  .addEventListener('click', startChangingColor);
const stopBtn = document
  .getElementById('stop')
  .addEventListener('click', stopChangingColor);
const body = document.querySelector('body');

// setInterval(function () {
//   stratBtn.addEventListener('click', function () {
//     body.style.backgroundColor = randomColor();
//   });
//   // clearInterval;
// }, 1000);
