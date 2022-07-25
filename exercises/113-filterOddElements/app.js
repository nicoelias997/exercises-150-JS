const filterOddElements = arr => {
  let array = [];
  for(let i = 0; i < arr.length; i++){
      array = arr.filter(n => n % 2 !== 0)
    }
  return array
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]