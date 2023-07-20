'use strict';

const proccess = require('./proccess.js');

const { preProccessors } = require('../../modules/index.js');

const { getUniques, filterObject } = preProccessors;

const dataObject = (col, result, entryPoint) => {
    let dbDataArray = [];
    let dbData;



    if (col.length) {
        col[0].links.forEach(element => {
            dbDataArray.push(element.word);
        });
        dbData = col[0].links;
    } else {
        dbData = [];
    };

    dbDataArray = { links: dbDataArray };

    let data = proccess(dbDataArray, result, entryPoint);

    let mergedData;

    if (dbData.length) {
        mergedData = [...dbData, data.data];

        mergedData = filterObject(mergedData); // QUICK FIX, NEED REFACTOR

        data.data = getUniques(mergedData);
    };

    return data;
};

module.exports = dataObject;