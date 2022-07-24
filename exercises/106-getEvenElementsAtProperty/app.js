var obj = {
  key: [1000, 11, 50, 17, "hola"]
};

const getEvenElementsAtProperty = (obj,key) => {
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        if(obj[key][i] % 2 == 0){
          obj[propiedad][i] = obj[key][i]
        } else {
          obj[propiedad][i] = [];
        }
      }
    } 
  }
  return obj[key]
}

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [ 1000, [], 50, [], [] ]