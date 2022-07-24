const removeElement = (arr, parametro) => {
    let array = [];
for(let i = 0; i < arr.length; i++){
  if(arr[i] != parametro){
    array.push(arr[i])
  }
}
return array
}
removeElement([1, 2, 3, 2, 1], 2); // --> [1, 3, 1]