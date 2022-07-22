var obj = {
    name: 'Sam',
    age: 20
  }
  
  const removeStringValues = obj =>{
    for(let propiedad in obj){
          if(typeof obj[propiedad] == 'string'){
          delete obj[propiedad]
        }
    }
    return obj
  }
  removeStringValues(obj)
  