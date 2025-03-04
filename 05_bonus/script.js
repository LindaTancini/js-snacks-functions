/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function sayHi(input) {
  const hours = new Date("03-03-2025IT18:00:00");

  let greeting;
  if (hours < 13) {
    greeting = "Buongiorno";
  } else if (hours < 17) {
    greeting = "Buon Pomeriggio";
  } else {
    greeting = "Buonasera";
  }
  return `${greeting} ${input}.`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHi(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
