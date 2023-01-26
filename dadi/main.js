// Generare un numero random da 1 a 6, sia per il giocatore, sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERARE UN NUMERO RANDOM DA 1 A 6 PER IL GIOCATORE
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
alert("Numero del giocatore: " + numeroGiocatore);
console.log("Numero del giocatore: " + numeroGiocatore);

let numeroComputer = Math.floor(Math.random() * 6) + 1;
alert("Numero del computer: " + numeroComputer);
console.log("Numero del computer: " + numeroComputer);

// ISTRUZIONI CONDIZIONALI
if (numeroGiocatore > numeroComputer) {
    alert("Congratulazioni, hai vinto!");
    console.log("Congratulazioni, hai vinto!");
}

else if (numeroGiocatore < numeroComputer) {
    alert("Mi dispiace, hai perso");
    console.log("Mi dispiace, hai perso");
}

else {
    alert("È un pareggio, aggiorna la pagina per rigiocare!");
    console.log("È un pareggio, aggiorna la pagina per rigiocare!");
}