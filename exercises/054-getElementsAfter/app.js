function getElementsAfter(array, n) {
  return	array.slice(n + 1,array.length)
}
getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);//['d', 'e']
