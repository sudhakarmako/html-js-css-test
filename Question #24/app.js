var firstword="mary";
var secondword="army";
console.log(isAnagram(firstword,secondword));

function isAnagram(first,second){
  var a= first.toLowerCase();
  var b= second.toLowerCase();
  a=a.split("").sort().join("");
  b=b.split("").sort().join("");
   return a===b;
}