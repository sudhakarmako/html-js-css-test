const str = "im working on mako it lab"; 
const vowels = str.match(/[aeiou]/gi); 
const consonants = str.match(/[^aeiou]/gi);   
console.log(vowels)
console.log(consonants)

