const mutation = require('./mutation.js');
const Matrix   = require('./matrix.js');

class mutant{

    hasMutation(adnArray){

      let adnMatrix = Matrix.adnArrayToMatrix(adnArray);

      return mutation.hasMutation(adnMatrix);

    }

}

module.exports = new mutant();