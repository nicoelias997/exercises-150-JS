var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }

  const removeArrayValues = obj =>{
    for(let propiedad in obj){
      if(Array.isArray(obj[propiedad]) == true){
          delete obj[propiedad]
      }
    }
    return obj
  }
  removeArrayValues(obj)
  