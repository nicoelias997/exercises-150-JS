var obj = {
  key: [2, 1, 5, -1, "hola"]
};
const getSquaredElementsAtProperty = (obj, key) => {
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        if(!isNaN(obj[key][i])){
           obj[propiedad][i] = (obj[key][i])**2
           } else{
             obj[propiedad][i] = [];
           }
      }
    }
  }
  return obj[key]
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [ 4, 1, 25, 1, [] ]