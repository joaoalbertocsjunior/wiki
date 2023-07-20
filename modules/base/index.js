const bulkImport = require('../bulkImport.js');

const modules = bulkImport(__dirname + '/');

const {
    cleanLinks,
    fetchLinksAndContent,
    proccess,
    dataObject,
    sortedData
} = modules;

module.exports = {
    cleanLinks,
    fetchLinksAndContent,
    proccess,
    dataObject,
    sortedData
};