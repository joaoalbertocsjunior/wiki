'use strict';

const base = './modules/base/index.js';

const modules = './modules/modules/index.js';

const {
    fetchLinksAndContent,
    proccess
} = require(base);

const { database, preProccessors } = require(modules);

const { getCollection } = database;

const { getUniques } = preProccessors;

let oldData = [];

const entryPointFunction = async (entryPoint, apiUrl) => {
    return fetchLinksAndContent(entryPoint, apiUrl).then((result) => {
        const arr = [];
        if (oldData.length) {
            oldData.forEach(element => {
                arr.push(element.word);
            });
        };
        const value = proccess(arr, result, entryPoint);
        oldData = proccess.data;
        return value;
    }).catch((err) => { console.log(err); });
}

const apiUrl = 'https://en.wikipedia.org/w/api.php';

entryPointFunction('Avocado', apiUrl).then((data) => {
    const savedData = data.data;
    oldData = savedData;
    entryPointFunction('America', apiUrl).then((result) => {
        oldData = [...result.data, ...savedData];
        oldData = getUniques(oldData);
        console.log(oldData);
    }).catch((err) => { console.log(err); });
}).catch((err) => { console.log(err); });

//check save and update function

