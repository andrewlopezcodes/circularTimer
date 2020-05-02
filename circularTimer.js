class Timer {
  constructor(durationInput, startButton, pauseButton, signals) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (signals) {
      this.onStart = signals.onStart;
      this.onTick = signals.onTick;
      this.onTimerAtZero = signals.onTimerAtZero;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.currentTime = setInterval(this.tick, 1000);
    this.startButton.disabled = true;

  };
  pause = () => {
    clearInterval(this.currentTime);
    this.startButton.disabled = false;
  };

  tick = () => {
    if (this.onTick) {
      this.onTick();
    }

    if (this.remainingTimeInDurationInput === 1 && this.onTimerAtZero) {
      this.pause();
      this.onTimerAtZero();
    } else if (this.remainingTimeInDurationInput === 1) {
      this.pause();
    }
    this.remainingTimeInDurationInput = this.remainingTimeInDurationInput - 1;
  }

  get remainingTimeInDurationInput() {
    return parseFloat(this.durationInput.value);
  }
  set remainingTimeInDurationInput(currentValueInDurationInput) {
    this.durationInput.value = currentValueInDurationInput;
  }

}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer has started')
  },
  onTick() {
    console.log('tick')
  },
  onTimerAtZero() {
    console.log('timer is at 0')
  }
});