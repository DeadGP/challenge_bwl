const mutant = require('./src/lib/muta.js');

let adn = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];

console.log(mutant.hasMutation(adn));