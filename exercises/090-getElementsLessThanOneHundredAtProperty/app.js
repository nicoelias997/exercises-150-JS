var obj = {
    key: [1000, 20, 50, 500, 123, "asda",]
  };
  const getElementsLessThan100AtProperty = (obj,key) => {
        let newObj = [];
        for(let key in obj){
        for(let i = 0; i < obj.key.length; i++){
          if(obj.key[i] < 100){
            newObj[i] = obj.key[i]
          } else {
            newObj[i] = [];
          }
        }
      }
        return newObj
  }
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [ [], 20, 50, [], [], [] ]