
let firstRoot;
let secondRoot;
let a= prompt('');
let b= prompt('');
let c= prompt('');
let squareRoot = b*b-4*a*c;
if (squareRoot > 0) {
    firstRoot = (-b + Math.sqrt(squareRoot)) / (2 * a);
    secondRoot = (-b - Math.sqrt(squareRoot)) / (2 * a);
    console.log(`The roots of quadratic equation are ${firstRoot} and ${secondRoot}`);
}
else (squareRoot == 0) 
    firstRoot = firstRoot= -b / (2 * a);
    console.log(`${firstRoot} and ${secondRoot}`);
