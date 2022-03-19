const mutant = require('./src/lib/muta.js');

let adn = ["TTGCGA",
           "CAGTGC",   
           "TTATGT",
           "AGAAGG",
           "ACCCTA",
           "TCACTG"];

//“dna”:[“ATGCGA”,“CAGTGC”,“TTATGT”,“AGAAGG”,“CCCCTA”,“TCACTG”]




//También se puede realizar con la dependencia "dna-mutation"

//Se revisa si es mutada
console.log(mutant.hasMutation(adn));


//Ejemplo con la dependencia

const hasMutation = require('dna-mutation');

try {
    console.log('');
    console.log('');
    console.log('');
    console.log(hasMutation(adn));
} catch (error) {
    console.log(error.message);
}