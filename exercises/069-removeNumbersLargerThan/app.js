var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
for(let propiedad in obj){
  if(obj[propiedad] > num){
    delete obj[propiedad]
  }
  }
  return obj
}
removeNumbersLargerThan(3,obj)

