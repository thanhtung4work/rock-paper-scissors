
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

function getComputerMove(){
    return MOVES[ Math.floor(Math.random() * 3) ]
}

function playRound(player, cpu){
    //0: draw; 1: p win; -1: cpu win
    if(player == cpu){
        return 0;
    }
    if(player == 'rock' && cpu == 'scissors' ||
    player == 'paper' && cpu == 'scissors' ||
    player == 'scissors' && cpu == 'paper')
        return 1;

    return -1;
}

function gameplay(){
    let CPU = getComputerMove();
    let out1 = document.querySelector('#out1');
    let out2 = document.querySelector('#out2');
    let result = document.querySelector('#result');

    switch(playRound(playerMove , CPU)){
        case 0:
            result.innerHTML = 'DRAW';
            break;
        case -1:
            result.innerHTML = 'You lose';
            break;
        case 1:
            result.innerHTML = 'You win';
            break;
    }


    out1.innerHTML = playerMove;
    out2.innerHTML = CPU;
    console.log('Player: %s, CPU: %s', playerMove, CPU);
}
