const getLongestElement = arr => {
	let array = [];
  for(let i = 0; i < arr.length; i++){
    array[i] = arr[i].length;
  }
  let max = Math.max(...array)
  for(let j = 0; j < array.length; j++){
    if(array[j] === max){
      let posicion = j;
      return arr[j]
    }
  }
}

var output = getLongestElement(['one', 'twooo', 'three', "holaa"]);
console.log(output); // --> 'twooo'