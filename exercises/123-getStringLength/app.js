const getStringLength = str => {
    let contador = 0;;
    while(str !== ""){
      str = str.substring(1) // str = str.slice(1)
      contador++
    }
    return contador
  }	
  
  var output = getStringLength('hello');
  console.log(output); // --> 5
  // + NO uses ningún método nativo de `length`.
  
  // + Puedes considerar usar `substring` o `slice` como alternativas.
  