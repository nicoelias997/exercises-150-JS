function findSmallestNumberAmongMixedElements(arr) {
  let numeros = [];
  for(let i = 0; i < arr.length; i++){
    if(!isNaN(arr[i])){
      numeros.push(arr[i])
    }
  }
return Math.min(...numeros)
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // -->git 4