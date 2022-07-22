var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
for(let propiedad in obj){
  if(obj[propiedad] < num){
    delete obj[propiedad]
  }
  }
  return obj
}
removeNumbersLessThan(3,obj)