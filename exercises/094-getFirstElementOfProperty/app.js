var obj = {
    key: [1, 2, 4]
  };
  const getFirstElementOfProperty = (obj,key) => {
    for(let key in obj){
      for(let i = 0; i < obj.key.length; i++){
        return obj.key[0]
      }
    }
  }
  
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1