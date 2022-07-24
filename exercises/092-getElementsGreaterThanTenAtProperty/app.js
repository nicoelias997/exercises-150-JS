var obj = {
    key: [1, 20, 30, 0, 312]
  };
  
  const getElementsGreaterThan10AtProperty = (obj,key) => {
    let array = [];
    for(let key in obj){
      for(let i = 0; i < obj.key.length; i++){
                  if(obj.key[i] > 10){
            array[i] = obj.key[i]
          } else{
            array[i] = [];
          }
      }
    }
    return array
  }
  
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [ [], 20, 30, [], 312 ]