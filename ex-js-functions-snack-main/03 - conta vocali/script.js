const word = "javascript";

// Dichiara la funzione qui.
const onlyVocali = (word) => {
  const vocali = ["a", "e", "i", "o", "u"]; 
  let countVocali = 0; 

  for (let i = 0; i < word.length; i++) {
    if (vocali.includes(word[i])) {
      
      countVocali++; 
    }
  }
  return countVocali; 
};

// Invoca la funzione qui e stampa il risultato in console
const onlyVocaliCount = onlyVocali(word);
console.log(onlyVocaliCount); // Risultato atteso: 3 (a, a, i)
