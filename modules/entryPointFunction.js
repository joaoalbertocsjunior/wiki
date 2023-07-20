'use strict';

const base = './base/index.js';

const modules = './modules/index.js';

const {
    fetchLinksAndContent,
    dataObject,
    sortedData
} = require(base);

const { database } = require(modules);

const { getCollection, insertOrUpdateDocument } = database;

const entryPointFunction = async (entryPoint, apiUrl) => {
    return fetchLinksAndContent(entryPoint, apiUrl).then((result) => {
        return getCollection('links').then(async (col) => {

            const data = dataObject(col, result, entryPoint);

            console.log(data.data.length); // NEED FIX

            return insertOrUpdateDocument({ links: data.data }, 'links').then(() => {
                return getCollection('data').then((value) => {

                    const sorted = sortedData(entryPoint, data, value);

                    return insertOrUpdateDocument({ data: sorted }, 'data').then(() => { // NEED FIX
                        return data;
                    }).catch((err) => { console.log(err); });

                }).catch((err) => { console.log(err); });
            }).catch((err) => { console.log(err); });
        }).catch((err) => { console.log(err); });
    }).catch((err) => { console.log(err); });
};

module.exports = entryPointFunction;

// TODO DB FUNCTION GET n UPDATE