/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const OnlyA = (names) => {
  const OnlyAWords = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].includes(`A`)) {
      OnlyAWords.push(names[i]);
    }
  }
  return OnlyAWords;
};

// Invoca la funzione qui e stampa il risultato in console
const OnlyAWords = OnlyA(names);
console.log(OnlyAWords);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
