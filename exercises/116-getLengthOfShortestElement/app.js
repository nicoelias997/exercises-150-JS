const getLengthOfShortestElement = arr =>{
    let array = [];
    for(let i = 0; i < arr.length; i++){
      array[i] = arr[i].length
    }
    return Math.min(...array)
  }
  
  var output = getLengthOfShortestElement(['one', 'two', 'three']);
  console.log(output); // --> 3