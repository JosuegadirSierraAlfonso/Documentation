//                                      localeCompare 
/* The localeCompare() method returns a number indicating whether 
a reference string comes before, or after, or is the same as the 
given string in sort order. In implementations with Intl.Collator 
API support, this method simply calls Intl.Collator.*/

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0