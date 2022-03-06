let computerArray = ["rock","paper","scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
let resultado;

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

    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {

        resultado = "wrong choice,please choose only \"rock,paper or scissors\"";
        return resultado;
    }

    // keep record of the current score.
   
    else if (playerSelection == computerSelection){
       
        resultado = `It's a tie,play again\n ${scorePlayer},${scoreComputer}`;
        return resultado;
    }

    else if (playerSelection == "rock" && computerSelection == "paper"){

        scoreComputer += 1;
        resultado = `You lose, paper beats rock \n${scorePlayer},${scoreComputer}`;
        return resultado;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {

        scorePlayer += 1;
        resultado = `You win! Rock beats scissors,congrats! \n ${scorePlayer},${scoreComputer}`;
        return resultado;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {

        scorePlayer += 1;
        resultado = `You win! paper beats rock,congrats! \n ${scorePlayer},${scoreComputer}`;
        return resultado;
    }
   
    else if (playerSelection == "paper" && computerSelection == "scissors") {

        scoreComputer += 1;
        resultado = `You lose scissors beats paper,try again \n ${scorePlayer},${scoreComputer}`;
        return resultado;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {

        scoreComputer += 1;
        resultado = `You lose rock beats scissors,try again \n ${scorePlayer},${scoreComputer}`;
        return resultado;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {

        scorePlayer += 1;
        resultado = `You win! scissors beats paper,congrats! \n ${scorePlayer},${scoreComputer}`;
        return resultado
    }
    
}


function game () {

    for(let i = 0; i < 5; i++){

        playerSelection = prompt("Choose Rock,Paper or Scissors").toLowerCase(); // case-insensitive
        computerSelection = computerPlay();
        singleRound(playerSelection,computerSelection); 
        if( scoreComputer == 3 || scorePlayer == 3){ 
            
            // Best of five, so the first one who gets to three wins the game
            alert(resultado);
            console.log(resultado);
            break;
        }

    // display current result
       alert(resultado);
       console.log(resultado);
     
    }

    //display final result

    if(scorePlayer > scoreComputer){
        
        

        console.log ("Congratulations, you just win Rock, paper and scissors");
        alert("Congratulations, you just win Rock, paper and scissors");
    }

    else if (scorePlayer < scoreComputer){

        console.log("So sad, you lose, better luck next time");
        alert("So sad, you lose, better luck next time");
    }

    else {

        console.log("It's a tie, thank you for playing.");
        alert("It's a tie, thank you for playing.");
    }
}

game ();