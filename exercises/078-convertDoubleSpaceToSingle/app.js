const convertDoubleSpaceToSingle = (string) => {
    let str = string.split("  ");
     return str.join(" ")  
}
convertDoubleSpaceToSingle("string  with  double  spaces");