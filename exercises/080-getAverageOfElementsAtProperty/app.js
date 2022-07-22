var obj = {
    key: [10, 10, 10]
  };
  
  const getAverageOfElementsAtProperty = (obj,key) => {
    let promedio = 0;
      let suma = 0;
    for(let key in obj){
    for(let i = 0; i < obj[key].length; i++){
      suma = suma + obj[key][i]
      promedio = ( suma / obj[key].length)
    }
    }
    return promedio;
    
  }
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2