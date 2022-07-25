const getLargestElement = arr => {
  if(arr.length == 0){
    return 0
  } else {
    return Math.max(...arr)
  }
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;