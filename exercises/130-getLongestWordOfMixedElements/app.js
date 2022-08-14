function getLongestWordOfMixedElements(arr) {
    let arrString = [];
    let longestWord = ""
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] == "string"){
            arrString.push(arr[i])
      }
    }
    for(let i = 0; i < arrString.length; i++){
      longestWord = arrString[0]
      if(arrString[i].length > arrString[0].length){
        longestWord = arrString[i]
      }
    }
    return longestWord
  }
  
  var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1, "aaa", "letras"]);
  console.log(output); // --> 'letras'