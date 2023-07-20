'use strict';

const basePath = './operations/';
const getCollection = require(`${basePath}getCollection.js`);
const insertOrUpdateDocument = require(`${basePath}insertOrUpdateDocument.js`);

module.exports = {
    getCollection,
    insertOrUpdateDocument
};