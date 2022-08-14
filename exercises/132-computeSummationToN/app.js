function computeSummationToN(n) {
    let suma = n;
          for(let i = 1; i < n; i++){
        suma += i
      }
    return suma
  }
  
  var output = computeSummationToN(7);
  console.log(output); // --> 28