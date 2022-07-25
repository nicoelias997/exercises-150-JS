const findSmallestElement = arr => {
    if(arr.length == 0){
      return 0
    } else {
      return Math.min(...arr)
    }
  }
  var output = findSmallestElement([4,1,9,10]);
  console.log(output); // --> 1