
const MOVES = ['rock', 'paper', 'scissors']
let playerMove = ''

function rock(){
    playerMove = 'rock';
    gameplay();
}

function paper(){
    playerMove = 'paper';
    gameplay();
}

function scissors(){
    playerMove = 'scissors';
    gameplay();
}

function toggleButton(elem){
    if (elem.disabled == true)
        elem.disabled = false;
    else
        elem.disabled = true;
}

function getComputerMove(){
    return MOVES[ Math.floor(Math.random() * 3) ]
}

function playRound(player, cpu){
    //0: draw; 1: p win; -1: cpu win
    if(player == cpu){
        return 0;
    }
    if(player == 'rock' && cpu == 'scissors' ||
    player == 'paper' && cpu == 'rock' ||
    player == 'scissors' && cpu == 'paper')
        return 1;

    return -1;
}

//get both move, compare and show on screen
function gameplay(){
    const btn = Array.from(document.querySelectorAll(".btn"));

    let CPU = getComputerMove();
    let out1 = document.querySelector('#out1');
    let out2 = document.querySelector('#out2');
    let result = document.querySelector('#result');

    //wait for both player and cpu moves to show and then show the result
    setTimeout(function(){
        
        switch(playRound(playerMove , CPU)){
            case 0:
                animateString('result', 'D R A W', 500);
                break;
            case -1:
                animateString('result', 'YOU LOSE', 500);
                break;
            case 1:
                animateString('result', 'YOU WIN', 500);
                break;
        }

        toggleButton(btn[0]); toggleButton(btn[1]); toggleButton(btn[2]); 
    }, 500)
    

    toggleButton(btn[0]); toggleButton(btn[1]); toggleButton(btn[2]); 
    out1.innerHTML = playerMove;
    animateString("out2", CPU, 300);
    console.log('Player: %s, CPU: %s', playerMove, CPU);
}


function animateString(id, str, fps){
    let interval = null;
    const elem = document.getElementById(id);
    elem.innerHTML = ''
    clearInterval(interval);
    interval = setInterval(frame, fps/10);
    let i = 0;

    if(str === 'D R A W')
        elem.style['color'] = 'blue';
    else if(str === 'YOU LOSE')
        elem.style['color'] = 'red';
    else if(str === 'YOU WIN')
        elem.style['color'] = 'green'

    function frame(){
        if (elem.innerHTML.length >= str.length)
            clearInterval(interval);
        else{
            elem.innerHTML += str[i];
            i++;
        }
    }
}