const getAllElementsButNth = (arr, indice) => {
    for(let i = 0; i < arr.length; i++){
      if(i === indice){
        arr.splice(i,1);
    }  
  }
    return arr;
  }
  var output = getAllElementsButNth(['a', 'b', 'c'], 1);
  console.log(output); // --> ['a', 'c']