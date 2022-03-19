const validator  = require('./validator.js');
const matrix     = require('./matrix.js');


//Se extraen las diagonales de la matriz
const extractDiags = (matriz) => {

  let tiras = [];

  //Diagonal superior
  matriz.forEach((col,i) => tiras.push(matrix.extractDiagSupCol(matriz,i)) );

  //Diagonal inferior
  matriz.forEach((row,i)=>{ 

    if (i>0)
      tiras.push(matrix.extractDiagInfRow(matriz,i)); 

  });

  return tiras;

}


//Se extraen las columnas
const extractCols = (matriz)=>{

  return matriz.map((col,i) => matrix.extractCol(matriz,i) );

}


//Se extraen las filas
const extractRows = (matriz)=>{

  return matriz.map((col,i) => matrix.extractRow(matriz,i) );

}

//Se verifica las secuencias consecutivas
const checkConsecutive = (lineArray,tope) => {

  let last   = '';
  let actual = '';
  let count  = 0;

  for (let i=0;i<=lineArray.length-1;i++){
          
      last   = (i==0)?lineArray[0]:lineArray[i-1];
      actual = lineArray[i];
      
      if (last==actual){
          count++;
                      
        if (count==tope)
          return true;
          
      }
      
  }

  return false;

}

module.exports.hasMutation = (matriz)=>{

    //Se obtienen las diagonales
    let diags = extractDiags(matriz);

    //Se traen las columnas
    let cols  = extractCols(matriz);

    //Se traen las filas
    let rows  = extractRows(matriz);

    //Se filtran las filas que son consecutivas
    return ( [...diags,...cols,...rows].find((line) => checkConsecutive(line,4)).length > 0);
}