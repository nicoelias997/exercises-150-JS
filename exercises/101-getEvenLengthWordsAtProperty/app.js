var obj = {
  key: ['a', 'long', 'game', "holi", "oye"]
};

const getEvenLengthWordsAtProperty = (obj,key) => {
  for(let propiedad in obj){
    if(propiedad == key){
      for(let i = 0; i < obj[key].length;i++){
        if(obj[key][i].length % 2 == 0){
          obj[propiedad][i] = obj[key][i];
        } else {
          obj[key][i] = [];
        }
      }
    }
  }
  return obj[key]
}

getEvenLengthWordsAtProperty(obj, 'key'); //[ [], 'long', 'game', 'holi', [] ]