const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

function getUniqueValues(arrOfNum) {
  var unique = arrOfNum.set();
  console.log(unique);
}

getUniqueValues();
