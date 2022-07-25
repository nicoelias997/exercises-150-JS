const calculateBillTotal = total => {
    let impuestos = 9.5/100;
    let propina = 15/100;
    let ventaTotal = total + total*propina;
    return ventaTotal + total*impuestos;
  }
  
  var output = calculateBillTotal(20);
  console.log(output); // --> 24.9
  //+ Suponga que el impuesto sobre las ventas es del 9.5% y la propina es del 15%.
  
  //+ NO le des propina al impuesto sobre las ventas, solo al monto de la propina correspondiente al monto antes de impuesto.2