var obj = {
    key: [4, 1, 8],
  algo: [1, 2,3]
};

function getSumOfAllElementsAtProperty(obj, key) {
  let suma = 0;
  for(let propiedades in obj){
    if(propiedades == key){
      for(let i = 0; i < obj[key].length; i++){
           suma += obj[key][i]    
      }
    }
  }
  return suma
}
getSumOfAllElementsAtProperty(obj, 'algo'); // --> 6
getSumOfAllElementsAtProperty(obj, 'key'); // --> 13