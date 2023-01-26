// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// CHIEDI ALL'UTENTE LA SUA EMAIL
const userMail = prompt("Inserisci la tua email");
console.log("L'email dell'utente è: " + userMail);

// LISTA DI CHI PUÒ ACCEDERE
const acceptedEmails = ["mariorossi1@gmail.com", "pincopallino1@gmail.com", "pippo1@gmail.com", "pluto1@gmail.com", "paperino1@gmail.com"];

// CONTROLLA SE LA MAIL DELL'UTENTE SIA NELLA LISTA DI CHI PUÒ ACCEDERE
let accessAllowed = false;

for (let i = 0; i < acceptedEmails.length; i++) {
    console.log(acceptedEmails[i]);

    if (userMail == acceptedEmails[i]) {
        accessAllowed = true;
    }
}

if (accessAllowed == true) {
    console.log("Accesso permesso!");
    alert("Accesso permesso!");
} else {
    console.log("Accesso negato!");
    alert("Accesso negato!");
}
