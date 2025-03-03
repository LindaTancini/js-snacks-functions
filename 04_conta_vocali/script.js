/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVocali(letter) {
  const vocali = "aeiou";
  let count = 0;
  for (let i = 0; i < letter.length; i++) {
    if (vocali.indexOf(word[i]) !== -1) count++;
    //metodo includes
    // if (vocali.includes(word[i])) count++;
  }
  return count;
}

// CON ARROW FUNCTION

/* const countVocali = (letter) => {
    const vocali = "aeiou";
  let count = 0;
  for (let i = 0; i < letter.length; i++) {
    if (vocali.indexOf(word[i]) !== -1) count++;
    
  }
  return count;}

*/

// Invoca la funzione qui e stampa il risultato in console
const count = countVocali(word);
console.log(count);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
