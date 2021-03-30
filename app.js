let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let timer = document.getElementById('timer');
let x = 25*60;

function countdown(){
    function yo(){
        --x;
        timer.innerText = (~~(x/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) + ":" + (x%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    }

    let y = setInterval(yo, 1000);
}
startBtn.onclick = countdown;