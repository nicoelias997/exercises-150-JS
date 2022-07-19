function removeFromBackOfNew(arr) {
	let array = arr.slice(0, arr.length - 1);
  return array;
}
var arr = [1, 2, 3];
removeFromBackOfNew(arr); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]