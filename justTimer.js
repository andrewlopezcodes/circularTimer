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
      this.onStart(this.remainingTimeInDurationInput);
    }
    this.tick();
    this.currentTime = setInterval(this.tick, 50);
    this.startButton.disabled = true;

  };
  pause = () => {
    clearInterval(this.currentTime);
    this.startButton.disabled = false;
  };

  tick = () => {
    if (this.remainingTimeInDurationInput === -1) {
      this.remainingTimeInDurationInput = this.remainingTimeInDurationInput + 2;
      this.pause();
    }

    if (this.onTick) {
      this.onTick(this.remainingTimeInDurationInput);
    }

    if (this.remainingTimeInDurationInput === 0.05 && this.onTimerAtZero) {
      this.pause();
      this.onTimerAtZero();
    } else if (this.remainingTimeInDurationInput === .05) {
      this.pause();
    }
    this.remainingTimeInDurationInput = this.remainingTimeInDurationInput - .05;
  }

  get remainingTimeInDurationInput() {
    return parseFloat(this.durationInput.value);
  }
  set remainingTimeInDurationInput(currentValueInDurationInput) {
    this.durationInput.value = currentValueInDurationInput.toFixed(2);
  }

}