let score = document.getElementById('score');
let input = document.getElementById('input');
let pick = document.getElementById('pick');
let reset = document.getElementById('reset');
let comment = document.getElementById('comment');
let hiddenNum = document.getElementById('hiddenNum');


let winmsg = 'YOU WIN!!'
let losemsg = 'YOU LOSE!!'

pick.onclick = check
let rady;
let scoring = score.innerHTML;
let scoreNum = 0
function inscore () {
    scoreNum++;
    score.textContent = scoreNum
}

function check() {
    function randomNum (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; }
        rady = randomNum(1, 10);
    
    if (input.value == rady) {
        comment.innerHTML = winmsg
        inscore()
        input.style.borderColor = 'blue';
        input.style.outlineColor = 'blue';
    }
    else if (input.value > 10 || input.value < 1) {
        comment.innerHTML = 'Pick only between 1 and 10';
        input.style.borderColor = 'red';
        input.style.outlineColor = 'red';
    }
     else {
        comment.innerHTML = losemsg;
        input.style.borderColor = 'blue';
        input.style.outlineColor = 'blue';
        
    }
    hiddenNum.innerHTML = rady
    input.value = null
}
input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        check()
    }
})
function ress() {
    score.innerHTML = 0
}
reset.onclick = resss



