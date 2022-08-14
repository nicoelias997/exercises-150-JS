const findShortestWordAmongMixedElements = (array) => {
    let arrayStrings = [];
    let shortWord = "";
    for(let i = 0; i < array.length; i++){
      if(typeof array[i] == "string"){
        arrayStrings.push(array[i])
      }
    }
    for(let i = 0; i < arrayStrings.length; i++){
          shortWord = arrayStrings[0]
      if(arrayStrings[i].length < arrayStrings[0].length){
        shortWord = arrayStrings[i]
      }
    }  
    return shortWord
  }
  var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three',"abc"]);
  console.log(output); // --> 'two'