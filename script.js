
let num1 = getRandomCard() ;
let num2 = getRandomCard();
let sum = num1 + num2;
let message = document.getElementById("result-el")
let cards = document.getElementById("cards");
cards.innerHTML+=num1 + "-" + num2
document.getElementById("sum").innerHTML+=sum;
let flag = "alive";

function startGame(){
    let result;
    if(sum<21){ 
        result = "Do you want to draw a new card?"
    }
    else if(sum===21){
        result = "You've got Blackjack!"
        flag = "notalive"
    }
    else{
        result = "You're out of the game!"
        flag = "notalive"
    }
    message.innerHTML = result;
}

function newCard(){
    if(flag=="alive"){
       let num3 = getRandomCard();
       sum=num1+num2+num3;
       cards.innerHTML+="-"+num3
       document.getElementById("sum").innerHTML="Sum:"+" "+sum;
       startGame();
  }
}

function getRandomCard(){
    return Math.floor(Math.random()*13)+1;
} 