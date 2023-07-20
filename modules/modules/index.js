const bulkImport = require('../bulkImport.js');

const modules = bulkImport(__dirname + '/');

const {
    iterationsLogger,
    clearStringsWildCard,
    filterUniques,
    getLinks,
    getUniques,
    markVisited,
    removePrefixFromArray,
    removeAfterHashFromArray,
    filterArrayByPrefix,
    filterObject,
    updateEntryPoint,
    compress,
    joiner,
    sortFetch,
    getCollection,
    insertOrUpdateDocument,
} = modules;

module.exports = {
    loggers: { iterationsLogger },
    preProccessors: {
        clearStringsWildCard,
        filterUniques,
        filterObject,
        getLinks,
        getUniques,
        markVisited,
        removePrefixFromArray,
        removeAfterHashFromArray,
        filterArrayByPrefix
    },
    shared: {
        compress,
        joiner,
        sortFetch,
        updateEntryPoint
    },
    database: {
        getCollection,
        insertOrUpdateDocument
    }
};