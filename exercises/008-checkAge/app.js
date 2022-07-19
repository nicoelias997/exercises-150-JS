function checkAge(name, age) {
  if(age < 21){
    return `go home, ${name}!`
  } else {
    return `¡Welcome, ${name} `
  }
}
checkAge("Nico",24)