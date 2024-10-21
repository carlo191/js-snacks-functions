/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

const onlyIniziali = (names) => {
  const iniziali = [];
  for (let i = 0; i < names.length; i++) {
    iniziali.push(names[i].charAt(0));
  }
  return iniziali;
};

// Invoca la funzione qui e stampa il risultato in console

const iniziali = onlyIniziali(names);
console.log(iniziali);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
