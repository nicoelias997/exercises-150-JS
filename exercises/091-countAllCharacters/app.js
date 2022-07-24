const countAllCharacters = str => {
    let obj = {}; // 1º creamos el objeto
    let array = str.split(""); //2º convertimos str en un array para que sea mas facil trabajar con el
    
      for(let i = 0; i < array.length; i++){ //3º recorremos el array
          if(!obj.hasOwnProperty(array[i])){ //4º nos preguntamos con 'hasOwnProperty' si el objeto tiene la propiedad especificada en ().. y devuelve true or false.. por lo tanto if(es falso...)
        obj[array[i]] = 1; // 5º asignamos un valor numerico a la nueva propiedad del obj.. por lo tanto, cuando sigamos recorriendo, empezara a dar true con el hasOwnProperty..    
      } else {
        obj[array[i]]++ //6º como ahora da true.. le sumaremos 1 cada vez que se repita esa letra
      }
    }
    return obj //devovlemos el objeto
  }
  //Lo que hacemos entonces, si el objeto no tiene propiedad, una vez que vayamos recorriendo cada letra, le asignaremos a ese objeto, la propiedad 'letra', y luego cada vez que esa letra se repita, le iremos sumando
  
  countAllCharacters("banananadjasd"); //{ b: 1, a: 5, n: 3, d: 2, j: 1, s: 1 }