const getLengthOfLongestElement = arr => {
    let array = [];
    for(let i = 0; i < arr.length; i++){
         array = arr[i].length
    }
    return Math.max(array)
  }
 
 var output = getLengthOfLongestElement(['one', 'two', 'three',"hola tu"]);
 console.log(output); // --> 7