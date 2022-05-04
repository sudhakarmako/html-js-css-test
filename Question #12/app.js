const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
let a = [];
arrOfNum.forEach((i) => {
  !a.includes(i) && a.push(i);
});
console.log(a);
