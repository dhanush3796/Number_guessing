// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=30;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretNo=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent='No Number';
    }
    else if(guess===secretNo){
        document.querySelector('.message').textContent='Correct Number';
        document.querySelector('.number').textContent=secretNo;

        document.querySelector('body').style.backgroundColor='#06b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess>secretNo){
        if(score>1){
        document.querySelector('.message').textContent='to high';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='You lost the game';
    }
}
    else if(guess<secretNo){
        if(score>1){
            document.querySelector('.message').textContent='to low';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game';
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNo=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})
