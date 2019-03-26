let imgs = document.querySelectorAll(".select img");
let resoult = document.querySelector("div.panel-left h2");
let playerChoiceDisplay = document.querySelector("div.panel-left p:nth-child(2) span");
let aiChoiceDisplay = document.querySelector("div.panel-left p:nth-child(3) span")

let yourChoice;
let aiChoice;


let playerWon = 0;
let aiWon = 0;
let draw = 0;
let games = 0;

let aiChoiceRand = () =>{
    const poss = ["paper","rock","scissors"];

    aiChoice = poss[Math.floor(Math.random()* 3)];
}

let checked = ()=>{

    games += 1;
    //paper vs scissors => scissors

    if(yourChoice === aiChoice){
        resoult.innerHTML = "DRAW";
        draw+=1;
    }
    else if(yourChoice === "paper" && aiChoice === "scissors" || yourChoice === "scissors" && aiChoice === "paper" ){
        if(yourChoice === "scissors"){
            resoult.innerHTML = "You Win!!";
            playerWon+=1;
        }
        else if(aiChoice === "scissors"){
            resoult.innerHTML = "Computer WIN!!";
            aiWon +=1;
        }
    }

    // paper vs rock = paper

   else if(yourChoice === "paper" && aiChoice === "rock" || yourChoice === "rock" && aiChoice === "paper" ){
        if(yourChoice === "paper"){
            resoult.innerHTML = "You WIN!!";
            playerWon+=1;
        }
        else if(aiChoice === "paper"){
            resoult.innerHTML = "Computer WIN!!";
            aiWon +=1;
        }
    }
    // scissors vs rock = rock

    else if(yourChoice === "scissors" && aiChoice === "rock" || yourChoice === "rock" && aiChoice === "scissors" ){
        if(yourChoice === "rock"){
            resoult.innerHTML = "You WIN!!";
            playerWon+=1;
        }
        else if(aiChoice === "rock"){
            resoult.innerHTML = "Compuret WIN!!";
            aiWon +=1;
        }
    }
    
}

let update = () =>{
    document.querySelector(".panel-right p:nth-child(2) span").innerHTML = games;
    document.querySelector(".panel-right p:nth-child(3) span").innerHTML = playerWon;
    document.querySelector(".panel-right p:nth-child(4) span").innerHTML = aiWon;
    document.querySelector(".panel-right p:nth-child(5) span").innerHTML = draw;
}

imgs.forEach(picked = (img) =>{

    img.addEventListener("click" , function(){
        yourChoice = img.getAttribute("data-option");
        aiChoiceRand();
        playerChoiceDisplay.innerHTML = yourChoice;
        aiChoiceDisplay.innerHTML = aiChoice;

        checked();
        update();
    });

});

document.querySelector("button").addEventListener("click" , function(){

    // playerWon = 0;
    // aiWon = 0;
    // draw = 0;
    // games = 0;
    // resoult.innerHTML = "";
    // playerChoiceDisplay.innerHTML = "";
    // aiChoiceDisplay.innerHTML = "";

    playerWon = aiWon = draw = games = 0;
    resoult.innerHTML = playerChoiceDisplay.innerHTML = aiChoiceDisplay.innerHTML =  "";

    update();

});

