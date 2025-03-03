/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function getNamesLetter(array, letter) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith(letter)) result.push(array[i]);
  }
  return result;
}

// Invoca la funzione qui e stampa il risultato in console
const result = getNamesLetter(names, "A");
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
