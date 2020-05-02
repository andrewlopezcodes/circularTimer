const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const circlePerimeter = circle.getAttribute('r') * 2 * Math.PI;
console.log(`This is the circlePerimeter ${circlePerimeter}`);
circle.setAttribute('stroke-dasharray', circlePerimeter);
let howLongTimerIsSetForInInputDisplay;


const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(howLongIsTimer) {
    console.log('Timer has started')
    howLongTimerIsSetForInInputDisplay = howLongIsTimer;
  },
  onTick(remainingTimeInDurationInput) {
    circle.setAttribute('stroke-dashoffset',
      circlePerimeter * remainingTimeInDurationInput / howLongTimerIsSetForInInputDisplay - circlePerimeter
    );

  },
  onTimerAtZero() {
    console.log('timer is at 0')
  }
});

// stroke-dasharray="560"
//       stroke-dashoffset="-100" 