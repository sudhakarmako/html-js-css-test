let a = [1, 2, 2, 4, 5, 6, 6];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);