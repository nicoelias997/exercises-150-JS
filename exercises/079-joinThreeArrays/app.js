const joinThreeArrays = (str1,str2,str3) => {
  let strOne = str1.concat(str2);
  let strFinal = strOne.concat(str3);
  return strFinal;
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]