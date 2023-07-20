'use strict';

const base = './modules/base/index.js';

const modules = './modules/modules/index.js';

const {
    proccess
} = require(base);

const { database, shared, preProccessors } = require(modules);

const { getCollection, insertOrUpdateDocument } = database;

const { joiner, sortFetch } = shared;

const { getUniques } = preProccessors;


let oldData = [];
let dbData;

let col, result;

col = [{ word: '/wiki/abc', visited: false }];
result = { links: ['/wiki/ccd'] };
const entryPoint = 'abc';

if (col.length) {
    col.forEach(element => {
        oldData.push(element.word);
    });
    dbData = col[0].links;
} else {
    dbData = [];
};

oldData = { links: oldData };

console.log(oldData);

console.log(result);

let data = proccess(oldData, result, entryPoint);

console.log(data);

const mergedData = [...dbData, data.data];

//data.data = getUniques(mergedData);

//console.loog(data);



module.exports = entryPointFunction;