const squareElements = arr => {
  let array = [];
  for(let i = 0; i < arr.length; i++){
    if(!isNaN(arr[i])){
       array[i] = arr[i]**2
       } else {
         array[i] = [];
       }
  }
  return array
}

var output = squareElements([1, 2, 3, "hola"]);
console.log(output); // --> [ 1, 4, 9, [] ]