function getAllLetters(str) {
    let array = [];
    for(let i = 0; i < str.length; i++){
      array.push(str[i])
    }
      return array;
  }
  var output = getAllLetters('Radagast');
  console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']