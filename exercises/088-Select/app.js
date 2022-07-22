var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const select = (arr, obj) => {
  let newObj = {};
  	for(let propiedad in obj){
  		for(let i = 0; i < arr.length; i++){ 
					if(propiedad == arr[i]){
            newObj[propiedad] = obj[propiedad]
          }        
      }
    }
  return newObj
 }
select(arr, obj); //{ a: 1, c: 3 