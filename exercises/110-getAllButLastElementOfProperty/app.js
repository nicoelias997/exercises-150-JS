var obj = {
  key: [1, 2, 3,4,5]
};
const getAllButLastElementOfProperty = (obj,key) => {
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        obj[propiedad][i] = obj[key][i]
      }
    }
  }
  obj[key].pop()
  return obj[key]
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2,3,4]