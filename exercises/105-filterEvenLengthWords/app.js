var obj = {
    key: [1, 2, 3, 4, 5, "hola"]
  };
  
  const filterEvenLengthWords = (arr) => {
    let array = [];
  for(let i = 0; i < arr.length; i++){
        if(arr[i].length % 2 == 0){
        array.push(arr[i])
      }
      }
    return array
  }
  
  
  
  filterEvenLengthWords(['word', 'horse', 'car', 'computer']); // --> ['word', 'computer']