var obj = {
  key: [1, 2, 3, 4, 5, "hola"]
};

const getOddElementsAtProperty = (obj, key) => {
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        if(obj[key][i] % 2 !== 0 && !isNaN(obj[key][i])){
          obj[propiedad][i] = obj[key][i]
        } else {
          obj[propiedad][i] = [];
        }
      }
    }
}
  return obj[key]
}
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [ 1, [], 3, [], 5, [] ]