var obj = {
  key: [2, 1, 5,0,-1]
};
const getSmallestElementAtProperty = (obj,key) => {
  let array = [];
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        array.push(obj[key][i])
      }
    }
  }
	return Math.min(...array)//Ya que el prototipo de array es 'object'
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> -1