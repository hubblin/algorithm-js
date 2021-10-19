function makeAdder(x) {
    var y = 1;
    return z => {
      y = 100;
      return x + y + z;
    };
  }

  const add5 = makeAdder(5);

console.log(add5(2));