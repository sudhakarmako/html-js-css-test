function counter() {
  var _counter = 0;
  return {
    add: function (increment) {
      _counter += increment;
      // console.log(_counter);
      return _counter;
    },
  };
}

var c = counter();
c.add(5);
c.add(9);
console.log(c.add(2))
// console.log(c.);

// What is the value of _counter, print the output
