const filterEvenElements = arr => {
    let array = [];
    for(let i = 0; i < arr.length; i++){
      array = arr.filter(n => n % 2 == 0)
    }
    return array
  }
  
  var output = filterEvenElements([2, 3, 4, 5, 6]);
  console.log(output); // --> [2, 4, 6]