//                                      String.raw 
/* String.raw() is the only tag function built into string templates; 
works the same as the default template function and performs the concatenation. You can even reimplement it with normal JavaScript code.*/

console.log(`Hi\n${2+3}!`)


console.log(String.raw`Hi\n${2+3}!`);
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.
