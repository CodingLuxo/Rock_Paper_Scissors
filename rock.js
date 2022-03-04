let juegoComputadora = ["Rock","Paper","Scissors"];

function computerPlay(){

const random = Math.floor(Math.random() * juegoComputadora.length);
console.log(juegoComputadora[random]);

}

computerPlay();