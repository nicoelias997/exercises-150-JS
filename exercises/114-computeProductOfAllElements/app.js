const computeProductOfAllElements = arr => {
    let producto = 1;
    for(let i = 0; i < arr.length; i++){
      producto = producto * arr[i]
    }
    return producto
  }
  
  var output = computeProductOfAllElements([2, 5, 6]);
  console.log(output); // --> 60