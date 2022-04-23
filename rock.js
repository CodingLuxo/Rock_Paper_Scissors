const computerArray = ["rock","paper","scissors"];
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



const buttons = document.querySelectorAll("button");
const tu = document.querySelector("#you p");
const cpu = document.querySelector("#computer p");
const result = document.querySelector("#result p");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{    
        if(scoreComputer == 5 || scorePlayer == 5)return;
        singleRound(button.id,computerPlay());
        tu.textContent = `${scorePlayer}`;
        cpu.textContent = `${scoreComputer}`;
        result.textContent = `${resultado}`;
        if(scorePlayer > scoreComputer && scorePlayer == 5){
            result.textContent = "Congratulations, you just win Rock, paper and scissors!!";
        }
        else if (scorePlayer < scoreComputer && scoreComputer == 5){
            result.textContent ="So sad, you lose, better luck next time";
        }   
    })
});
    
function playAgain(){

    scorePlayer = 0;
    scoreComputer = 0;
}    



    



function singleRound(playerSelection,computerSelection){


    // keep record of the current score.
   
    if (playerSelection == computerSelection){
       
        resultado = `It's a tie,play again`;
        return resultado;
        
    }

    else if (playerSelection == "rock" && computerSelection == "paper"){

        scoreComputer += 1;
        resultado = `You lose, paper beats rock`;
        return resultado;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {

        scorePlayer += 1;
        resultado = `You win! Rock beats scissors,congrats!`;
        return resultado;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {

        scorePlayer += 1;
        resultado = `You win! paper beats rock,congrats!`;
        return resultado;
        alert(resultado);
    }
   
    else if (playerSelection == "paper" && computerSelection == "scissors") {

        scoreComputer += 1;
        resultado = `You lose scissors beats paper,try again`;
        return resultado;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {

        scoreComputer += 1;
        resultado = `You lose rock beats scissors,try again`;
        return resultado;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {

        scorePlayer += 1;
        resultado = `You win! scissors beats paper,congrats!`;
        return resultado
    }
    
}





/*function game () {

    for(let i = 0; i < 5; i++){

    
        computerSelection = computerPlay();
        singleRound(playerSelection,computerSelection); 
        
        // I need to make sure that the input value is correct

        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        
        //if input value is wrong, I need to ensure that i value stays the same so we could still play 5 rounds


        i-- ;
        resultado = "wrong choice,please choose only \"rock,paper or scissors\"";
    
    }

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
*/
