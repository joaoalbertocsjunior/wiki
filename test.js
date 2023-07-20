'use strict';

const base = './modules/base/index.js';

const modules = './modules/modules/index.js';

const {
    fetchLinksAndContent,
    proccess
} = require(base);

const { database, shared, preProccessors } = require(modules);

const { getCollection, insertOrUpdateDocument } = database;

const { joiner, sortFetch } = shared;

const { getUniques } = preProccessors;

let counter = 0;

let col = [];

const entryPointFunction = async (entryPoint, apiUrl) => {
    return fetchLinksAndContent(entryPoint, apiUrl).then((result) => {
        //return getCollection('links').then(async (col) => {
        const linksArray = [];
        if (col.length) {
            col.forEach(element => {
                linksArray.push(element.word);
            });
        };
        console.log(linksArray.length);
        if (result.length) {
            result.forEach(element => {
                linksArray.push(element);
            });
        };
        console.log(linksArray.length);

        //col = linksArray;

        //console.log(cols.length);
        //let data = proccess(linksArray, result, entryPoint);
        //data.data = getUniques(data.data);
        //counter += data.data.length - counter; // CHECK THIS
        //console.log(data.data.length);
        //return insertOrUpdateDocument({ links: data.data }, 'links').then(() => {
        //    return getCollection('data').then((value) => {
        //        const save = {
        //            word: entryPoint,
        //            data: data.compressed
        //        };
        //        const merged = joiner([save], value);
        //        const sorted = sortFetch(merged);
        //        return insertOrUpdateDocument({ data: sorted }, 'data').then(() => {
        //            return data;
        //        }).catch((err) => { console.log(err); });
        //    }).catch((err) => { console.log(err); });
        //}).catch((err) => { console.log(err); });
        //}).catch((err) => { console.log(err); });
    }).catch((err) => { console.log(err); });
};

module.exports = entryPointFunction;