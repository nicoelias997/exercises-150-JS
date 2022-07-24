const keep = (arr, element) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== element){
        arr[i] = [];
      }
    }
    return arr
  }
  
  var output = keep([1, 2, 3, 2, 1], 2) 
  console.log(output); //--> [ [], 2, [], 2, [] ]