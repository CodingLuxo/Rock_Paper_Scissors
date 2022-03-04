let juegoComputadora = ["rock","paper","scissors"];
let scorePlayer = 0;
let scoreComputer = 0;


function computerPlay(){

const random = Math.floor(Math.random() * juegoComputadora.length);

return juegoComputadora[random];

}

playerSelection = prompt("Make your choice").toLowerCase();
computerSelection = computerPlay();

function singleRound(playerSelection,computerSelection){


   


    if(playerSelection == computerSelection) {

        console.log("It's a tie, keep playing");
       

    }

    else if (playerSelection == "rock" && computerSelection == "paper"){

        console.log ("you lose, rock loses against paper");
        return scoreComputer += 1;
        
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {

        console.log("well done, rock beats scissors");
        return scorePlayer += 1; 
         
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {

        console.log ("well done, paper beats rock");
        return scorePlayer += 1; 

    
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {

        console.log ("you lose, your paper gets cutted by the scissors");
        return scoreComputer += 1;
    
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {

        console.log("you lose, your scissors can't cut my solid rock hahah");
        return scoreComputer += 1;
    
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {

        return "amazing, you win";
        scorePlayer += 1; 

        
    }

}


console.log(singleRound(playerSelection,computerSelection))