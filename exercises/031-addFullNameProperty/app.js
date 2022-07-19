var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

function addFullNameProperty(obj) {
    obj.fullName = obj.firstName + " " + obj.lastName;
  	return obj
}
addFullNameProperty(person);
console.log(person.fullName);ss