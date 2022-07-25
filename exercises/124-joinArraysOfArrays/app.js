const joinArrayOfArrays = matriz => {
  let array = [];
  for(let i = 0; i < matriz.length; i++){
    array = array.concat(matriz[i])
  }
  return array
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
