var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  function countNumberOfKeys(obj){
    let count = 0;
    for(let propiedad in obj){
      count++
    }
    return count
  }
  countNumberOfKeys(obj);