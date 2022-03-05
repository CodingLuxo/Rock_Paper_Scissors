let computerArray = ["rock","paper","scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

/* 

I searched in Stackoverflow ways to get a random value from an array, I found this link, first I used Math.random function
(this return a number between 0 and 1), then I multiply this value with the lenght of my array (in this case, 3) and finally
I run this result in the function Math.floor, which round downwards the final number, so the possible values are 0, 1 and 2 
https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

*/

function computerPlay(){

const random = computerArray[Math.floor(Math.random() * computerArray.length)];
return random;

}

function singleRound(playerSelection,computerSelection){

    // I need to ensure that the input value is correct
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){

        console.log ("wrong choice");
    }

    // keep record of the current score.
    else if(playerSelection == computerSelection) {

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

        playerSelection = prompt("Choose Rock,Paper or Scissors").toLowerCase(); // case-insensitive
        computerSelection = computerPlay();
        singleRound(playerSelection,computerSelection); 
        if( scoreComputer == 3 || scorePlayer == 3){ 
            
            // Best of five, so the first one who gets to three wins the game
            break;
        }

       
     
    }

    //display final result

    if(scorePlayer > scoreComputer){
        
        

        console.log ("Congratulations, you just win Rock, paper and scissors");
    }

    else if (scorePlayer < scoreComputer){

        console.log("So sad, you lose, better luck next time");
    }

    else {

        console.log("It's a tie, thank you for playing.");
    }
}

game ();