var obj = {
  key: [1,2,3,4]
};
const getProductOfAllElementsAtProperty = (obj,key) => {
  let producto = 1;
  for(let propiedad in obj){
    if(propiedad == key){
      if(obj[key].length == 0){
        return 0
      } else {
      for(let i = 0; i < obj[key].length; i++){
        producto = producto*obj[key][i]
      	}
      }
    } else {
      return 0
    }
  }
  return producto
}

var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24