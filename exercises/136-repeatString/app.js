function repeatString(string, num) {
    if(typeof string == "string"){
      return string.repeat(num)
    }
  }
  
  var output = repeatString('code', 3);
  console.log(output); // --> 'codecodecode'