class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }
  start = () => {
    this.tick();
    this.currentTime = setInterval(this.tick, 1000);

  };
  pause = () => {
    clearInterval(this.currentTime);
  };
  tick = () => {
    let remainingTime = parseFloat(this.durationInput.value);
    this.durationInput.value = remainingTime - 1;
  }
  durationInput = () => {}


}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);