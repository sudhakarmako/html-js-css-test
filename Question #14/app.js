var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,]

for (var i = 1; i < numbers.length; i++)
    for (var j = 0; j < i; j++)
        if (numbers[i] < numbers[j]) {
          var x = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = x;
        }

console.log(numbers);