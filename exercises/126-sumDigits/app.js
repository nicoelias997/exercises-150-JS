function sumDigits(num) {
    let numero = num.toString().split("")
    let sumaDigitos = 0;
    for(let i = 0; i < numero.length; i++){
      if(numero[i] == "-"){
        i++
      sumaDigitos -= parseInt(numero[i])
        continue
      }
      sumaDigitos += parseInt(numero[i])
    }
    
    return sumaDigitos
  }
  
  sumDigits(-316); // -- 4
  
  sumDigits(1148);// --> 14