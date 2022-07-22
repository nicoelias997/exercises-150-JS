var obj = {
    key: [1000, 10, 50, 10, "", 13, 10]
  };

  const getElementsThatEqual10AtProperty = (obj,key) => {
    let newObj = [];
    for(let key in obj){
      for(let i = 0; i < obj[key].length; i++){
       if(obj[key][i] === 10){
      	newObj[i] = obj[key][i];
       } else{
         newObj[i] = [];
       }
        
       }
      
      }
    return newObj
    }
    
  
  var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [ [], 10, [], 10, [], [], 10]