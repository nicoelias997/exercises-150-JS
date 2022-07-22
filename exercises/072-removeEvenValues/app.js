var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  function removeEvenValues(obj){
    for(let propiedad in obj){
      if(obj[propiedad] % 2 == 0){
        delete obj[propiedad]
      }
    }
    return obj
  }
  removeEvenValues(obj);