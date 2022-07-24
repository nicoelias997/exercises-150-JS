var obj = {
    key: ['It', 'has', 'some', 'words'],
      paco: ['It', 'has', 'some', 'words']

  };
  const getOddLengthWordsAtProperty = (obj,key) => {
    for(let propiedad in obj){
      if(propiedad == key){
        for(let i = 0; i < obj[key].length; i++){
          if(obj[key][i].length % 2 !== 0){
            obj[propiedad] = obj[key]
          } else {
            obj[key][i] = [];
          }
        }
      }
    }
    return obj[key]
  }
  
  var output = getOddLengthWordsAtProperty(obj, 'paco');
  console.log(output); // --> ['has', 'words']
