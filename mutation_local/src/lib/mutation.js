const validator  = require('./validator.js');
const matrix     = require('./matrix.js');

const extractDiags = (matriz) => {

  let tiras = [];

  matriz.forEach((col,i) => tiras.push(matrix.extractDiagSupCol(matriz,i)) );

  matriz.forEach((row,i)=>{ 

    if (i>0)
      tiras.push(matrix.extractDiagInfRow(matriz,i)); 

  });

  return tiras;

}

const extractCols = (matriz)=>{

  return matriz.map((col,i) => matrix.extractCol(matriz,i) );

}


const extractRows = (matriz)=>{

  return matriz.map((col,i) => matrix.extractRow(matriz,i) );

}

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

    let diags = extractDiags(matriz);

    let cols  = extractCols(matriz);

    let rows  = extractRows(matriz);

    return ( [...diags,...cols,...rows].find((line) => checkConsecutive(line,4)).length > 0);
}