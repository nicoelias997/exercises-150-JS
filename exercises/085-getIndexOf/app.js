const getIndexOf = (caracter, str) => {
    for(let i = 0; i < str.length; i++){
      if(str[i] == caracter){
        return i
      }
    }
  }
  
  var output = getIndexOf('a', 'I am a hacker');
  console.log(output); // --> 2 