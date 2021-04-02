// DOM elements
let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let stopBtn = document.getElementById('stop');
let timerText = document.getElementById('timer');
// End DOM elements

// Working time minutes*seconds
let sessionDuration = 25*60;
let timerInterval;

// Event listeners
startBtn.addEventListener('click', function(){
    timerInterval = setInterval(startTimer, 10);
})

stopBtn.addEventListener('click', function(){
    clearInterval(timerInterval);
});

resetBtn.addEventListener("click", function(){
    sessionDuration = 25*60;
    if (timerInterval != undefined){
        clearInterval(timerInterval);
    }
    updateTimer();
})

// End event listeners

function updateTimer(){
    timerText.innerText = (~~(sessionDuration / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) + ":" + (sessionDuration % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
}

function startTimer(){
    --sessionDuration;
    if (sessionDuration <= 0){
        clearInterval(timerInterval);
    }
    updateTimer();
}


