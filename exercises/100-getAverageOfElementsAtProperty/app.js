var obj = {
  key: [1, 2, 3]
};
const getAverageOfElementsAtProperty = (obj,key) => {
  let suma = 0;
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        suma = suma + obj[key][i];
      }
    }
  }
  return suma/obj[key].length
}

var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  