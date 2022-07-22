var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  function removeStringValuesLongerThan(num, obj) {
      for(let propiedad in obj){
          if(obj[propiedad].length > num){
              delete obj[propiedad]
          }
      }
  return obj
  }
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }
  