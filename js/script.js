/* Variable Declaration: Constant */
let oldUser = 65;
let youngUser = 18;
let ticketPrice = 0.21;


/* Variable Declaration: let Prompt */
let username= prompt("Inserisci il tuo nome");
let km= prompt("Inserisci i km");
let age= prompt("Inserisci la tua età");

/* Variable Declaration: let Operational Result */
let ticketTotal= (km * ticketPrice).toFixed(2);
let ticketOldDiscount= (ticketTotal*40 / 100);
let ticketYoungDiscount= (ticketTotal*20 / 100);
let ticketOldTotal= (ticketTotal - ticketOldDiscount).toFixed(2)
let ticketYoungTotal= (ticketTotal - ticketYoungDiscount).toFixed(2)
/* Variable HTML print */
let userOutput = document.getElementById("user-result");


/* Function */
if (age >= oldUser) {
    userOutput.innerHTML =
    `Ciao ${username}. Il costo totale del tuo biglietto è di: 
    ${ticketOldTotal}€`;

} else if(age <= youngUser) {
    userOutput.innerHTML =
    `Ciao ${username}. Il costo totale del tuo biglietto è di: 
    ${ticketYoungTotal}€`;

} else {
    userOutput.innerHTML =
    `Ciao ${username}. Il costo totale del tuo biglietto è di: 
    ${ticketTotal}€`;
}