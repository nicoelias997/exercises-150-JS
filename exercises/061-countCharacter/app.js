function countCharacter(str, char) {
    let contador = 0;
    for(let i = 0; i < str.length; i++){
        if(char == str[i]){
            contador++  
        }     
    }
  return contador;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3