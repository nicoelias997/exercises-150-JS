const findShortestElement = arr => {
    if(arr.length == 0){
      return ""
    } else {
    let shortest = arr[0]
    for(let i = 0; i < arr.length; i++){
              if(arr[i].length < arr[0].length){
          shortest = arr[i]
        }
      }
    return shortest
      
    }
  }
      
  var output = findShortestElement(['a', 'two', 'three',"b","c"]);
  console.log(output); // --> 'a'