# `125` getProductOfAllElementsAtProperty

## 📝 Instructions:

1. Write a function called `getProductOfAllElementsAtProperty`.

Given an object and a key, `getProductOfAllElementsAtProperty` returns the product of all the elements in the array located at the given key.

## :bulb: Hint:

* If the array is empty, it should return `0`.

* If the property at the given key is not an array, it should return `0`.

* If there is no property at the given key, it should return `0`.

```Js
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
```