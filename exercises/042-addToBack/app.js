function addToBack(arr, element) {
  let array = arr.push(element);
  return arr
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]