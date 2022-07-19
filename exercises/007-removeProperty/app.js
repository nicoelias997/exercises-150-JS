var obj = {
  name: 'Sam',
  age: 20
}
function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}
removeProperty(obj,"age")