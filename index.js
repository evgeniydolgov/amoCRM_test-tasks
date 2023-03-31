const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let timerGo;
const createTimerAnimator = () => {
  return (seconds) => {
    const timer = document.getElementById('timer');
    timerGo = setInterval(() => {
      seconds > 216000 ? (seconds = 0) : seconds;
      timerSeconds = seconds % 60;
      timerMinuts = Math.floor(seconds / 60) < 60 ? Math.floor(seconds / 60) : Math.floor((seconds % 3600) / 60);
      timerHours = Math.floor(seconds / 3600) > 60 ? Math.floor(seconds / 3600) : Math.floor((seconds % 216000) / 3600);
      console.log(timerHours);
      timer.innerText = `${timerHours.toString().padStart(2, '0')}:${timerMinuts
        .toString()
        .padStart(2, '0')}:${timerSeconds.toString().padStart(2, '0')}`;
      seconds++;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (el) => {
  const { value } = el.target;
  !isFinite(value) ? (inputEl.value = value.slice(0, -1)) : null;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  clearInterval(timerGo);
  animateTimer(seconds);

  inputEl.value = '';
});
