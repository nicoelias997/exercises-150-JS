const addToBackOfNew = (arr, element) => {
    let arr2 = Object.values(arr);
     arr2.push(element);
    return arr2;
}

var input = [1, 2];
addToBackOfNew(input, 3); //[ 1, 2, 3 ]
console.log(input) //[ 1, 2 ]