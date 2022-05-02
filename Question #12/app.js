const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
function getUniqueValues(arrOfNum) {
    const set = new Set(arrOfNum);
    return [...set];
  }