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
const again = document.createElement("button");
again.classList.add("pg");
const lastdiv = document.querySelector("#final");


function playAgain(){

    scorePlayer = 0;
    scoreComputer = 0;
    tu.textContent = `${scorePlayer}`;
    cpu.textContent = `${scoreComputer}`;
    result.textContent = "";
}  

buttons.forEach((button) => { //For each button in the Nodelist
    button.addEventListener("click", () => {    
        if(scoreComputer == 5 || scorePlayer == 5)return; //Make sure that 5 is the final score
        singleRound(button.id,computerPlay()); //button.id = "rock" || "paper" || "scissors" 
        tu.textContent = `${scorePlayer}`;     // display
        cpu.textContent = `${scoreComputer}`;  // scores
        result.textContent = `${resultado}`;   // of player and IA
        if(scorePlayer > scoreComputer && scorePlayer == 5){
            result.textContent = "Congratulations, you just win Rock, paper and scissors!!";
            lastdiv.appendChild(again); //the play again button appear
            again.textContent = "Play Again"; 
        }
        else if (scorePlayer < scoreComputer && scoreComputer == 5){
            result.textContent ="So sad, you lose, better luck next time";
            lastdiv.appendChild(again);
            again.textContent = "Play Again";
        }   
    })
});
 
// When you pressed "Play again" button, it dissapears without refreshing the page
again.addEventListener("click",() =>{
    playAgain();
    lastdiv.removeChild(again);    
});
  


function singleRound(playerSelection,computerSelection){


    // keep record of the current score.
   
    if (playerSelection == computerSelection){
       
        resultado = `It's a tie,play again`;
        return resultado;
        
    }

    else if (playerSelection == "rock" && computerSelection == "paper"){

        scoreComputer += 1;
        resultado = `You lose, paper beats rock,try again`;
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
    
    }
   
    else if (playerSelection == "paper" && computerSelection == "scissors") {

        scoreComputer += 1;
        resultado = `You lose, scissors beats paper,try again`;
        return resultado;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {

        scoreComputer += 1;
        resultado = `You lose,rock beats scissors,try again`;
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
