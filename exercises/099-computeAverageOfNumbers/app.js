const computeAverageOfNumbers = arr => {
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
      suma += arr[i]
    }
    return suma/arr.length
  }
  
  var input = [1,2,3,4,5];
  var output = computeAverageOfNumbers(input);
  console.log(output); // --> 3