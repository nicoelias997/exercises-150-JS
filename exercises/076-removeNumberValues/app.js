var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    for(let propiedad in obj){
      if(typeof obj[propiedad] == "number"){
        delete obj[propiedad]
    }
}
  return obj
}
removeNumberValues(obj)
