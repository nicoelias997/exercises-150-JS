var obj = {
    paco:[21,132,31],
    key: [1, 2, 5]
  };
  const getLastElementOfProperty = (obj,key) =>{
    for(let propiedad in obj){
      if(propiedad == key){
        for(let i = 0; i < obj[key].length; i++){
          return obj[key][obj[key].length -1]
        }
      }
    }
  }
  var output = getLastElementOfProperty(obj, 'paco');
  console.log(output); // --> 31