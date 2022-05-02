var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
var p = ['a','z','e','y'];

let sorted =numbers.sort(function(a, b){return a - b});
let sortedLetters= p.sort();
console.log(sorted);
console.log(sortedLetters);