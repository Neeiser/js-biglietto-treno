/* Variable Declaration: Constant */
let oldUser = 65;
let youngUser = 18;
let ticketPrice = 0.21;


/* Variable Declaration: let Prompt */
let username= prompt("Inserisci il tuo nome");
let km= prompt("Inserisci i km");
let age= prompt("Inserisci la tua età");

/* Variable Declaration: let Operational Result */
let ticketTotal= km * ticketPrice;
let ticketOldDiscount= Math.round(ticketTotal*40 / 100);
let ticketYoungDiscount= Math.round(ticketTotal*20 / 100);

/* Variable HTML print */
let userOutput = document.getElementById("user-result");


/* Function */
if (age >= oldUser) {
    userOutput.innerHTML =
    `Ciao ${username}. Il costo totale del tuo biglietto è di: 
    ${ticketTotal - ticketOldDiscount}€`;

} else if(age <= youngUser) {
    userOutput.innerHTML =
    `Ciao ${username}. Il costo totale del tuo biglietto è di: 
    ${ticketTotal - ticketYoungDiscount}€`;

} else {
    userOutput.innerHTML =
    `Ciao ${username}. Il costo totale del tuo biglietto è di: 
    ${ticketTotal}€`;
}