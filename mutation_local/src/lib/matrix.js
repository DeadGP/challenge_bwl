//Se recibe el array y se cambia a matriz
module.exports.adnArrayToMatrix = (adnArray) => {

    let finalMtx = [];

    //Se separa el array y se guarda en adn
    adnArray.forEach((adn) => {

        let tmpArray = [];

        //Se recorré adn para guardar en el array temporal
        for (let i = 0; i <= adn.length - 1; i++)
            tmpArray.push(adn[i]);

        //Se añade lo que contiene el array temporal para almacenarlo en la matriz final
        finalMtx.push(tmpArray);

    });

    return finalMtx;

}

//Se extrae la columna
module.exports.extractCol = (matriz, nCol) => {

    let groups = [];

    //Se recorre la matriz y se extrae la columna completa
    for (let i = 0; i <= matriz.length - 1; i++)
        groups.push(matriz[i][nCol]);

    return groups;

}

//Se extrae la columna para devolvero en un array
module.exports.extractRow = (matriz, nRow) => {

    let groups = [];

    
    //Se recorre la matriz y se extrae la fila completa
    for (let i = 0; i <= matriz.length - 1; i++)
        groups.push(matriz[nRow][i]);

    return groups;

}


//Se extraen los datos de manera diagonal (zona media) en base al número de columna
module.exports.extractDiagSupCol = (matriz, nCol) => {

    let line = [];

    //Se recorre la matriz mientras que i sea menor la la longitud de la matriz menos el número de columna menos 1
    for (let i = 0; i <= matriz.length - nCol - 1; i++)
        line.push(matriz[i][i + nCol]);

    return line;

}

//Se extraen los datos de manera diagonal (mitad inferior) en base al número de fila
module.exports.extractDiagInfRow = (matriz, nRow) => {

    let line = [];

    //Se recorre la matriz mientras que i sea menor la la longitud de la matriz menos el número de fila menos 1
    for (let i = 0; i <= matriz.length - nRow - 1; i++)
        line.push(matriz[i + nRow][i]);

    return line;

}