const mutation = require('./mutation.js');
const Matrix   = require('./matrix.js');

class mutant{

    //Método que revisa la matriz
    hasMutation(adnArray){

      //El array entrante se convierte a matriz
      let adnMatrix = Matrix.adnArrayToMatrix(adnArray);

      //Retorna si esta mutada o no
      return mutation.hasMutation(adnMatrix);

    }

}

module.exports = new mutant();