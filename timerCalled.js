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