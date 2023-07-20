'use strict';

const basePath = './modules/';

const eventLoop = require(`${basePath}eventLoop.js`);

const { database, shared } = require(`${basePath}modules/index.js`);

const { updateEntryPoint } = shared;

const { getCollection } = database;

let params = {
    entryPoint: 'Avocado',
    totalCalls: 5,//Infinity,
    apiUrl: 'https://en.wikipedia.org/w/api.php'
};

getCollection('links', params.apiUrl).then((data) => {
    let dbLinks, entryPoint;
    entryPoint = undefined;
    if (data.length) {
        dbLinks = data[0].links;
        entryPoint = updateEntryPoint(dbLinks);
    }
    if (entryPoint === null) {
        console.log("Event loop stopped. 'entryPoint' is null.");
    } else {
        if (entryPoint !== undefined) {
            params.entryPoint = entryPoint;
        };
        eventLoop(params.entryPoint, params.totalCalls, params.apiUrl);
    };
}).catch((err) => { console.log(err); });