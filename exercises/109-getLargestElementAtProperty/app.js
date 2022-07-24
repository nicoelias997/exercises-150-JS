var obj = {
  key: [2, 1, 5,0,-1]
};
const getLargestElementAtProperty = (obj,key) => {
  let array = [];
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length; i++){
        array.push(obj[key][i])
      }
    }
  }
	return Math.max(...array)//Ya que el prototipo de array es 'object'
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 5