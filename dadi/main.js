// Generare un numero random da 1 a 6, sia per il giocatore, sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERARE UN NUMERO RANDOM DA 1 A 6 PER IL GIOCATORE
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("Numero del giocatore: " + numeroGiocatore);

let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Numero del computer: " + numeroComputer);