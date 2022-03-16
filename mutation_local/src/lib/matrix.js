module.exports.adnArrayToMatrix = (adnArray) => {

    let finalMtx = [];

    adnArray.forEach((adn) => {

        let tmpArray = [];

        for (let i = 0; i <= adn.length - 1; i++)
            tmpArray.push(adn[i]);

        finalMtx.push(tmpArray);

    });

    return finalMtx;

}

module.exports.extractCol = (matriz, nCol) => {

    let groups = [];

    for (let i = 0; i <= matriz.length - 1; i++)
        groups.push(matriz[i][nCol]);

    return groups;

}

module.exports.extractRow = (matriz, nRow) => {

    let groups = [];

    for (let i = 0; i <= matriz.length - 1; i++)
        groups.push(matriz[nRow][i]);

    return groups;

}

module.exports.extractDiagSupCol = (matriz, nCol) => {

    let line = [];

    for (let i = 0; i <= matriz.length - nCol - 1; i++)
        line.push(matriz[i][i + nCol]);

    return line;

}

module.exports.extractDiagInfRow = (matriz, nRow) => {

    let line = [];

    for (let i = 0; i <= matriz.length - nRow - 1; i++)
        line.push(matriz[i + nRow][i]);

    return line;

}