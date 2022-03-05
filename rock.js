let juegoComputadora = ["rock","paper","scissors"];
let scorePlayer = 0;
let scoreComputer = 0;


function computerPlay(){

const random = juegoComputadora[Math.floor(Math.random() * juegoComputadora.length)];
return random;

}

function singleRound(playerSelection,computerSelection){


   


    if(playerSelection == computerSelection) {

        console.log("It's a tie, keep playing",scorePlayer,scoreComputer);
       

    }

    else if (playerSelection == "rock" && computerSelection == "paper"){

        scoreComputer += 1;
        console.log ("you lose, rock loses against paper",scorePlayer,scoreComputer);
        
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {

        scorePlayer += 1;
        console.log("well done, rock beats scissors",scorePlayer,scoreComputer);
         
         
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {

        scorePlayer += 1; 
        console.log ("well done, paper beats rock",scorePlayer,scoreComputer);
           
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {

        scoreComputer += 1;
        console.log ("you lose, your paper gets cutted by my scissors",scorePlayer,scoreComputer);
        
    
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {

        scoreComputer += 1;
        console.log("you lose, your scissors can't cut my solid rock hahah",scorePlayer,scoreComputer);
        
    
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {

        scorePlayer += 1; 
        console.log("Well done, scissors beats paper",scorePlayer,scoreComputer);
        

        
    }

}


function game () {

    for(let i = 0; i < 5; i++){

        playerSelection = prompt("Choose Rock,Paper or Scissors").toLowerCase();
        computerSelection = computerPlay();
        singleRound(playerSelection,computerSelection) 
        if( scoreComputer == 3 || scorePlayer == 3){ 
            
            // Best of five, so the one who gets to three wins the game
            break;
        }

       
     
    }

    if(scorePlayer > scoreComputer){
        
        //display final result

        console.log ("Congratulations, you just win Rock, paper and scissors");
    }

    else if (scorePlayer < scoreComputer){

        console.log("So sad, you lose, better luck next time");
    }

    else {

        console.log("It's a tie, thank you for playing.");
    }
}