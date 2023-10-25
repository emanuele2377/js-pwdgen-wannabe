const nomeUtente = prompt( "Inserisci il tuo nome", "Emanuele");
const cognomeUtente = prompt("Inserisci il tuo cognome", "Kushi");
const colorePreferito = prompt("Inserisci il tuo colore preferito", "blu");
const password = prompt("La tua password è :", "");


document.getElementById("titolo").innerHTML = nomeUtente + cognomeUtente + colorePreferito + "#23";