
  const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
   
let unique = arrOfNum.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique); // [1, 2, 4, 5, 6]
// console.log(unique);
