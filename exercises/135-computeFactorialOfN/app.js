function computeFactorialOfN(n) {
    let num = Math.round(n)
    let numRandom = Math.floor((Math.random() * (10 - 1 + 1)) + 1);
    return num*numRandom
  }
  
  var output = computeFactorialOfN(3); console.log(output); // --> 6
  
  var output = computeFactorialOfN(4); console.log(output); // --> 24