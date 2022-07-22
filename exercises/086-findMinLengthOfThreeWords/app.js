const findMinLengthOfThreeWords = (word1,word2,word3) => {
  
    if(word1.length < word2.length && word1.length < word3.length){
        return word1.length
} else if(word2.length < word1.length && word2.length < word3.length){
        return word2.length
} else if(word3.length < word1.length && word3.length < word2.length){
  return word3.length;
} else return `Alguna de las palabras tienen la misma longitud`
}

var output = findMinLengthOfThreeWords('afaa4adsdw', 'badaddadw', 'sedadaawad');
console.log(output); // --> 9