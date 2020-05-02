const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const circlePerimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', circlePerimeter);
let currentDashOffset = 0;


const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer has started')
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentDashOffset);
    currentDashOffset = currentDashOffset - 50;
  },
  onTimerAtZero() {
    console.log('timer is at 0')
  }
});

// stroke-dasharray="560"
//       stroke-dashoffset="-100" 