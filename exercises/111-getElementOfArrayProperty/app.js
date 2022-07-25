var obj = {
    key: ['Jamil', 'Albrey']
   };
   const getElementOfArrayProperty = (obj,key,index) => {
     for(let propiedad in obj){
       if(propiedad == key){
         for(let i = 0; i < obj[key].length; i++){
           obj[propiedad][i] = obj[key][i]
         }
       } else {
         return undefined
       }
     }
     return obj[key][index]
   }
   
   var output = getElementOfArrayProperty(obj, 'key', 0); 
   console.log(output); // --> 'Jamil'