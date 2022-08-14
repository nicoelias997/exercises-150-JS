function getLargestNumberAmongMixedElements(arr) {
    let numeros = [];
    for(let i = 0;i < arr.length; i++){
      if(!isNaN(arr[i])){
        numeros.push(arr[i])
      }
    }
    return Math.max(...numeros)
  }
  
  var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
  console.log(output); // --> 5