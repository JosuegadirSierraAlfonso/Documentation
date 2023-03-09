//                                      replace 
/* The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. 
If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged. */

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"