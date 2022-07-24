var obj = {
    key: [1, 2, 6]
  };
  const getNthElementOfProperty = (obj,key,num) =>{
    for(let key in obj){
      for(let i = 0; i < obj[key].length; i++){
        return obj[key][num]
      }
    }
  }
  
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2