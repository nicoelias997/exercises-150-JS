var obj = {
  age: 21
};
function isPersonOldEnoughToDrive(person) {
  if(person.age >= 16) return true;
  else return false
}
isPersonOldEnoughToDrive(obj)