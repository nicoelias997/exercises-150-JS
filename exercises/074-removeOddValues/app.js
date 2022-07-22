var obj = {
    a: 2,
    b: 3,
    c: 4
  };

  function removeOddValues(obj){
    for(let propiedad in obj){
        if(obj[propiedad] % 2 !== 0)
        delete obj[propiedad]
    }
    return obj
  }
  removeOddValues(obj)
