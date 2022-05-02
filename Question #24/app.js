
// call a function to check if given two words are Anagrams
isAnagram(firstWord, secondWord); // Output is: true

function isAnagram(first, second) {
  
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  console.log(a.split("")) // returns array
  console.log(a.split("").sort()) // sort an array
  console.log(a.split("").sort().join("")) // joins back & returns string
  
  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  // apply same to second word
  b = b.split("").sort().join("");


  return a === b;
}