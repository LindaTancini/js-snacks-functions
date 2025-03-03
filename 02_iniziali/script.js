/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function initial(array) {
  let newInitial = [];
  for (let i = 0; i < array.length; i++) {
    newInitial.push(array[i].charAt(0));
  }
  return newInitial;
}

// CON ARROW FUNCTION

/* const initial = (array) => {
  let newInitial = [];
  for (let i = 0; i < array.length; i++) {
    newInitial.push(array[i].charAt(0));
  }
  return newInitial;
  }
*/

// Invoca la funzione qui e stampa il risultato in console
const newInitial = initial(names);
console.log(newInitial);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
