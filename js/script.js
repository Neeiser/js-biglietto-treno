/* Variable Declaration: Constant */
const oldUser = 65;
const youngUser = 18;
const ticketPrice = 0.21;


/* Variable Declaration: let Prompt */
let userName= prompt("Inserisci il tuo nome");
let km= prompt("Inserisci i km");
let age= prompt("Inserisci la tua età");

/* Variable Declaration: let Operational Result */
let ticketTotal= km * ticketPrice;

/* Variable HTML print */
let userOutput = document.getElementById("user-result");


/* Function */
if (age >= oldUser) {
    userOutput.innerHTML =
    `Ciao ${userName}. Il costo totale del tuo biglietto è di: 
    ${ticketTotal / 0.4}€`;

} else if(age <= youngUser) {
    userOutput.innerHTML =
    `Ciao ${userName}. Il costo totale del tuo biglietto è di: 
    ${ticketTotal / 0.2}€`;

} else {
    userOutput.innerHTML =
    `Ciao ${userName}. Il costo totale del tuo biglietto è di: 
    ${km * ticketPrice}€`;
}