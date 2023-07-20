'use strict';

const { preProccessors } = require('../../modules/index.js');

const {
    filterArrayByPrefix,
    clearStringsWildCard,
    removeAfterHashFromArray,
    filterUniques,
    removePrefixFromArray
} = preProccessors;

const cleanLinks = (linkArray) => {
    let result;
    result = filterArrayByPrefix(linkArray, '/wiki/');
    result = clearStringsWildCard('/wiki/.*:', result);
    result = removeAfterHashFromArray(result);
    result = filterUniques(result);
    result = removePrefixFromArray(result, '/wiki/');
    return result;
};

module.exports = cleanLinks;