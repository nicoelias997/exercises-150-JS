const filterOddLengthWords = arr => {
    let array = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length % 2 !== 0){
        array.push(arr[i])
      }
    }
    return array
  }
  
  var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  console.log(output); // --> ['there', "now']
  