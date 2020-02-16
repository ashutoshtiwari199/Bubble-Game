var bottom= document.querySelector('.bottom');
var guess=document.querySelector('#guess');
var timer=document.querySelector('#timer');
var score=document.querySelector('#score');

var time= 11;
var currentScore=0;
var currentGuess;


function makeBubble(){
    let template ='';
    for( i = 0; i<=77; i++){
        let random=Math.floor(Math.random()*10);
        template =template+`<div class="bubble">${random}</div>`;

    }
    bottom.innerHTML+=template;
    bottom.addEventListener("click", function(e){
        var e1=(e.target.innerText);
           if(currentGuess==e1){
                currentScore+=10;
                bottom.innerHTML="";
                scoreIncrease();
                makeBubble();
                guessNumber();
        }
    })
}

function guessNumber(){
    currentGuess=Math.floor(Math.random()*10);
    guess.innerHTML=currentGuess;
}

function dealWithTime(){
    setInterval(function(){
        if(time>0)
        timer.innerText=--time;
        else
        bottom.innerHTML=`<h6>Game Over <br> Your Score is ${currentScore}</h6>`;

},1000);
}

function scoreIncrease(){
    score.innerHTML=currentScore;
}


dealWithTime();
guessNumber();
makeBubble();
