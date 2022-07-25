const computeSumOfAllElements = arr => {
  let suma = 0;
  for(let i = 0; i < arr.length; i++){
    suma = suma + arr[i]    
  }
  if(!isNaN(suma)){
    return suma;
  } else {
    return NaN
  }
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6