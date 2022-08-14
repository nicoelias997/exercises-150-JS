function getLongestOfThreeWords(word1, word2, word3) {
    let mayorPalabra = "";
      let palabras = [word1,  word2, word3]
      for(let i = 0; i < palabras.length; i++){
        mayorPalabra = palabras[0]
        if(palabras[i].length > palabras[0].length){
        mayorPalabra = palabras[i]  
        }
      }
    return mayorPalabra
  }
  
  var output = getLongestOfThreeWords('these', 'three', 'words');
  console.log(output); // --> 'these'
  
  getLongestOfThreeWords("hola", "hola1", "hola12") // "hola12"